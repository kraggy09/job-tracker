import mongoose, { Schema } from "mongoose";
import getTime from "../config/getTime.js";

const jobModel = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    companylogo: {
      type: String,
    },
    salaryRange: {
      type: String,
    },
    jobRole: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: Date,
      default: () => getTime(),
    },
    status: {
      type: String,
      enum: ["Applied", "Interviewing", "Accepted", "Rejected", "No Response"],
      default: "Applied",
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobModel);

export default Job;
