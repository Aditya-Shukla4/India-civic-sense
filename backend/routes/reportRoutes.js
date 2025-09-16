const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Report = require("../models/Report");

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// POST report
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const report = new Report({
      title: req.body.title,
      description: req.body.description,
      email: req.body.email,
      severity: req.body.severity,
      lat: req.body.lat,
      lng: req.body.lng,
      photo: req.file ? `/uploads/${req.file.filename}` : "",
    });
    await report.save();
    res.json({ success: true, report });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
