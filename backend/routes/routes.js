import { Router } from "express";
import userRoutes from "./User.js";
import jobRoutes from "./Jobs.js";
const router = Router();

router.use("/user", userRoutes);
router.use("/jobs", jobRoutes);

export default router;
