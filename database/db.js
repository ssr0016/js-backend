import pkg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

const { Client } = pkg;

const database = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

try {
  await database.connect();
  console.log("Database connected successfully");
} catch (error) {
  console.error("Database connection error:", error);
  process.exit(1);
}

export default database;
