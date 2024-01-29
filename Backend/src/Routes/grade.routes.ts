import { Router } from "express";
import {
  getGrade,
  postGrade,
  putGrade,
  deleteGrade,
  getGrades
} from "../Controllers/grade.controller";

const router = Router();
router.get("/:id", getGrade);
router.get("/", getGrades);
router.post("/", postGrade);
router.put("/:id", putGrade);
router.delete("/:id", deleteGrade);

export default router;