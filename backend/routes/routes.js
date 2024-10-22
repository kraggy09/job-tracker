import { Router } from "express";
import userRoutes from "./User.js";
import jobRoutes from "./Jobs.js";
import resumeRoutes from "./Resume.js";
const router = Router();

router.use("/user", userRoutes);
router.use("/jobs", jobRoutes);
router.use("/resume", resumeRoutes);

export default router;
