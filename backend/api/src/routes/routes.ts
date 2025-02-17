import { Request, Response, Router } from "express";
import { Task } from "../models/tasks";

const router = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtiene todas las tareas
 *     description: Retorna una lista de todas las tareas almacenadas en la base de datos.
 *     tags:
 *       - Tareas
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: UUID
 *                     example: 99e1bf81-6206-4191-bae3-b581b2f61eac
 *                   title:
 *                     type: string
 *                     example: "Comprar leche"
 *                   description:
 *                     type: string
 *                     example: "Ir al supermercado a comprar leche"
 *                   status:
 *                     type: string
 *                     example: "pending"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-02-16T12:00:00Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-02-16T12:30:00Z"
 *       500:
 *         description: Error interno del servidor al obtener tareas
 */
router.get("/tasks", async (_req: Request, res: Response) => {
  try {
    const tasks: Task[] = await Task.findAll();
    res.status(200).json(tasks);
  } catch (e) {
    console.log(e);
    res.status(500).json({ Error: "Error al obtener tareas." });
  }
});

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Obtiene una tarea específica
 *     description: Retorna una tarea basada en el ID proporcionado.
 *     tags:
 *       - Tareas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a buscar
 *     responses:
 *       200:
 *         description: Tarea encontrada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: UUID
 *                   example: 99e1bf81-6206-4191-bae3-b581b2f61eac
 *                 title:
 *                   type: string
 *                   example: "Comprar leche"
 *                 description:
 *                   type: string
 *                   example: "Ir al supermercado a comprar leche"
 *                 status:
 *                   type: string
 *                   example: "pending"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-16T12:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-16T12:30:00Z"
 *       404:
 *         description: Tarea no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Error:
 *                   type: string
 *                   example: "Tarea no encontrada"
 *       500:
 *         description: Error interno del servidor al obtener la tarea
 */
router.get("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task: Task | null = await Task.findByPk(id);

    task ?? res.status(404).json({ Error: "Tarea no encontrada" });
    res.status(200).json(task);
  } catch (e) {
    console.log(e);
    res.status(500).json({ Error: "Error al obtener la tarea." });
  }
});

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crea una nueva tarea
 *     description: Agrega una nueva tarea a la base de datos.
 *     tags:
 *       - Tareas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Comprar leche"
 *               description:
 *                 type: string
 *                 example: "Ir al supermercado a comprar leche"
 *               status:
 *                 type: string
 *                 example: "pending"
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: UUID
 *                   example: 99e1bf81-6206-4191-bae3-b581b2f61eac
 *                 title:
 *                   type: string
 *                   example: "Comprar leche"
 *                 description:
 *                   type: string
 *                   example: "Ir al supermercado a comprar leche"
 *                 status:
 *                   type: string
 *                   example: "pending"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-16T12:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-16T12:00:00Z"
 *       400:
 *         description: Error en la creación de la tarea
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Error:
 *                   type: string
 *                   example: "Error creando la tarea"
 */
router.post("/tasks", async (req: Request, res: Response) => {
  try {
    const task: Task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (e) {
    console.log(e);
    res.status(400).json({ Error: "Error creando la tarea" });
  }
});

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Actualiza una tarea existente
 *     description: Modifica una tarea específica utilizando su ID.
 *     tags:
 *       - Tareas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Actualizar título"
 *               description:
 *                 type: string
 *                 example: "Actualizar descripción de la tarea"
 *               status:
 *                 type: string
 *                 example: "pending"
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: UUID
 *                   example: 99e1bf81-6206-4191-bae3-b581b2f61eac
 *                 title:
 *                   type: string
 *                   example: "Actualizar título"
 *                 description:
 *                   type: string
 *                   example: "Actualizar descripción de la tarea"
 *                 status:
 *                   type: string
 *                   example: "pending"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-16T12:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-16T12:30:00Z"
 *       404:
 *         description: Tarea no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Error:
 *                   type: string
 *                   example: "Tarea no encontrada."
 *       500:
 *         description: Error interno del servidor al actualizar la tarea
 */
router.put("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task: Task | null = await Task.findByPk(id);

    task ?? res.status(404).json({ Error: "Tarea no encontrada." });
    await task?.update({ title, description, status });
    res.status(201).json(task);
  } catch (e) {
    console.log(e);
    res.status(500).json({ Error: "Error al actualizar la tarea" });
  }
});

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Elimina una tarea
 *     description: Elimina una tarea específica utilizando su ID.
 *     tags:
 *       - Tareas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a eliminar
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: UUID
 *                   example: 99e1bf81-6206-4191-bae3-b581b2f61eac
 *                 title:
 *                   type: string
 *                   example: "Comprar leche"
 *                 description:
 *                   type: string
 *                   example: "Ir al supermercado a comprar leche"
 *                 status:
 *                   type: string
 *                   example: "pendiente"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-16T12:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-02-16T12:30:00Z"
 *       404:
 *         description: Tarea no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Error:
 *                   type: string
 *                   example: "Tarea no encontrada."
 *       500:
 *         description: Error interno del servidor al eliminar la tarea
 */
router.delete("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task: Task | null = await Task.findByPk(id);

    task ?? res.status(404).json({ Error: "Tarea no encontrada." });
    await task?.destroy();
    res.status(200).json(task);
  } catch (e) {
    console.log(e);
    res.status(500).json({ Error: "Error al eliminar la tarea." });
  }
});

export default router;
