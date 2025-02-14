import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Task } from "./models/tasks";
import sequelize from "./configs/datablase";

dotenv.config();

const app: Express = express();
const PORT: string = process.env.PORT || "3000";

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Este es el API para el To-Do List!");
});

// GET /tasks → Obtener todas las tareas.
app.get("/tasks", async (req: Request, res: Response) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// GET /tasks/:id → Obtener una tarea específica.
// POST /tasks → Crear una nueva tarea.
// PUT /tasks/:id → Actualizar una tarea existente.
// DELETE /tasks/:id → Eliminar una tarea.

sequelize.sync({ alter: true }).then(() => {
    console.log("Base de datos conectada 🚀");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  });