const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes"); // <- naya

const app = express();
const PORT = 8001;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // photo serve karne ke liye

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes); // <- naya

// MongoDB connect
mongoose
  .connect("mongodb://127.0.0.1:27017/civic_db")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.error(err));

// Start server
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
