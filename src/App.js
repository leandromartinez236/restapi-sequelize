import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "sequelize-nodejs-restapi",
    author: "Leandro Martinez",
    description: "Rest api with express and sequelize",
    version: "1.0.0",
  });
});

app.use("/api/projects", projectsRoutes);
app.use("/api/tasks", tasksRoutes);

export default app;
