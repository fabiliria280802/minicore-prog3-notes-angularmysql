import { Router } from "express";
import {
  getPeriod,
  postPeriod,
  putPeriod,
  deletePeriod,
  getPeriods
} from "../Controllers/period.controller";

const router = Router();
router.get("/:id", getPeriod);
router.get("/", getPeriods);
router.post("/", postPeriod);
router.put("/:id", putPeriod);
router.delete("/:id", deletePeriod);

export default router;