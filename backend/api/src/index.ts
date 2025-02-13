import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const PORT: string = process.env.PORT || "3000";

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hola, Express con TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});