const Job = require("./jobModel.js");

// GET ALL JOBS
exports.getAllJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// GET JOB BY ID
exports.getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: `Job not found !` });
    res.status(200).json(job);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATE JOB
exports.createJob = async (req, res, next) => {
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE JOB
exports.updateJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: `Job not found !` });
    await Job.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    const jobUpdated = await Job.findById(req.params.id);
    res.status(200).json(jobUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE JOB
exports.deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: `Job not found !` });
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Job deleted successfully !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
