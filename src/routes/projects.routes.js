import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getOneProject,
  getProjectsTasks,
} from "../controllers/projects.controller.js";
const router = Router();

router.get("/", getProjects);
router.get("/:id", getOneProject);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/:id/tasks", getProjectsTasks);
export default router;
