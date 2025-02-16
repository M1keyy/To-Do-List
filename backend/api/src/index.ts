import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/routes";
import sequelize from "./configs/datablase";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./configs/swaggerConfigs";

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
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Este es el API para el To-Do List!");
});

app.use("/", taskRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("Base de datos conectada 🚀");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
