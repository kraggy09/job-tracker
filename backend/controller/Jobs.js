import Job from "../model/Jobs.js";
import User from "../model/User.js";

export const createJobs = async (req, res) => {
  try {
    // Extract user ID from request and job data from request body
    const userId = req.userId;
    const { job } = req.body;

    // Validating job data before proceeding
    if (!job || !job.companyName || !job.jobRole) {
      return res.status(400).json({
        success: false,
        msg: "Please provide all necessary job details (companyName, jobRole).",
      });
    }

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User not found.",
      });
    }

    // Create the new job entry
    const newJob = await Job.create({
      companylogo: job.companylogo || "",
      companyName: job.companyName,
      jobRole: job.jobRole,
      salaryRange: job.salaryRange || "",
      user: userId,
    });

    if (!newJob) {
      return res.status(409).json({
        success: false,
        msg: "Unable to create the job",
      });
    }

    // Send a success response with the newly created job data
    return res.status(201).json({
      success: true,
      msg: "Job has been successfully added",
      data: newJob,
    });
  } catch (error) {
    // Catch any errors and send a server error response
    console.error("Error creating job:", error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred while creating the job.",
      error: error.message,
    });
  }
};

export const getJobById = async (req, res) => {
  try {
    const { jobId } = req.params;
    let userId = req.userId;

    // Find the job by ID
    const job = await Job.findOne({ _id: jobId, user: userId });
    if (!job) {
      return res.status(404).json({
        success: false,
        msg: "Job not found.",
      });
    }

    // Return the found job
    return res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error("Error fetching job:", error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred while fetching the job.",
      error: error.message,
    });
  }
};

export const getAllJobs = async (req, res) => {
  let userId = req.userId;
  try {
    const jobs = await Job.find({ user: userId }); // Populate user data if needed

    // Return all jobs
    return res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred while fetching jobs.",
      error: error.message,
    });
  }
};

export const deleteJobById = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Find the job by ID
    const job = await Job.findByIdAndDelete(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        msg: "Job not found.",
      });
    }

    // Return success message
    return res.status(200).json({
      success: true,
      msg: "Job has been successfully deleted.",
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    return res.status(500).json({
      success: false,
      msg: "An error occurred while deleting the job.",
      error: error.message,
    });
  }
};

export default createJobs;
