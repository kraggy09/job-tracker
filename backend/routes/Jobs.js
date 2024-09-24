import { Router } from "express";
import {
  verifyTokenFromQuery,
  verifyTokenMiddleware,
} from "../token/verifyToken.js";
import {
  createJobs,
  deleteJobById,
  getAllJobs,
  getJobById,
} from "../controller/Jobs.js";

const router = Router();

// Using verifyTokenMiddleware for creation, assuming it gets token from headers
router.post("/create", verifyTokenMiddleware, createJobs);

// Grouping routes that use verifyTokenFromQuery (query token)
router.use(verifyTokenFromQuery);

router.delete("/delete/:jobId", deleteJobById);
router.get("/getAllJobs", getAllJobs);
router.get("/getJob/:jobId", getJobById);

export default router;
