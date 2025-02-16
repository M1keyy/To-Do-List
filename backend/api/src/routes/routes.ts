import { Request, Response, Router } from "express";
import { Task } from "../models/tasks";

const router = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtiene todas las tareas
 *     description: Retorna una lista de todas las tareas en la base de datos.
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida con éxito
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
  
  router.post("/tasks", async (req: Request, res: Response) => {
    try {
      const task: Task = await Task.create(req.body);
      res.status(201).json(task);
    } catch (e) {
      console.log(e);
      res.status(400).json({ Error: "Error creando la tarea" });
    }
  });
  
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