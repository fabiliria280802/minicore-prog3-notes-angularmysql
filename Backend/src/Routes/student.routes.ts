import { Router } from "express";
import {
  getStudent,
  postStudent,
  putStudent,
  deleteStudent,
  getStudents
} from "../Controllers/student.controller";

const router = Router();
router.get("/:id", getStudent);
router.get("/", getStudents);
router.post("/", postStudent);
router.put("/:id", putStudent);
router.delete("/:id", deleteStudent);

export default router;