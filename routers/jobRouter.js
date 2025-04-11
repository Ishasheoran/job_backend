import express from "express";
import { Job} from "../models/jobSchema.js";

const router = express.Router();
const getAllJobs = async (req, res, next) => {
    try {
      const jobs = await Job.find();
      res.status(200).json(jobs);
    } catch (error) {
      next(error);
    }
  };
  // Express route example
router.put("/:id", async (req, res) => {
  const { status } = req.body;
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

 const deleteJob = async (req, res, next) => {
    try {
      const { id } = req.params;
      const job = await Job.findByIdAndDelete(id);
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      res.status(200).json({ message: "Job deleted" });
    } catch (error) {
      next(error);
    }
  };
  router.get("/", getAllJobs);  
  router.delete("/:id", deleteJob);

router.post("/", async (req, res) => {
    try {
                const { company,role, status,date,link} = req.body;

        if ( !company || !role ||  !status ||!date ||!link) {
            return res.status(400).json({ success: false, message: "Invalid input data", receivedData: req.body });
        }
        let jobAdded = [];
            const newJob = new Job({company,role, status,date,link });
            await newJob.save();
            jobAdded.push(newJob);
        res.json({ success: true, message: "Books added successfully", job: jobAdded });
    } catch (error) {
        console.error("🔥 Backend Error:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
});
export default router;