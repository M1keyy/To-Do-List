import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Task } from "./models/tasks";
import sequelize from "./configs/datablase";
import cors from "cors";

dotenv.config();

const app: Express = express();
const PORT: string = process.env.PORT || "8080";
app.use(
  cors({
    origin: process.env.CONSUMER,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Este es el API para el To-Do List!");
});

// GET /tasks → Obtener todas las tareas.
app.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasks: Task[] = await Task.findAll();
    res.status(200).json(tasks);
  } catch (e) {
    console.log(e);
    res.status(500).json({ Error: "Error al obtener tareas." });
  }
});

// GET /tasks/:id → Obtener una tarea específica.
app.get("/tasks/:id", async (req: Request, res: Response) => {
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

// POST /tasks → Crear una nueva tarea.
app.post("/tasks", async (req: Request, res: Response) => {
  try {
    const task: Task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (e) {
    console.log(e);
    res.status(400).json({ Error: "Error creando la tarea" });
  }
});

// PUT /tasks/:id → Actualizar una tarea existente.
app.put("/tasks/:id", async (req: Request, res: Response) => {
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

// DELETE /tasks/:id → Eliminar una tarea.
app.delete("/tasks/:id", async (req: Request, res: Response) => {
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

sequelize.sync({ alter: true }).then(() => {
  console.log("Base de datos conectada 🚀");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
