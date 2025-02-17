import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Task } from "../models/tasks";

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: "postgres",
  timezone: "-08:00",
  models: [Task],
  logging: false,
});

export default sequelize;