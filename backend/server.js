const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("../routes/authRoutes"); // ./routes/ folder me file ho
app.use("/api/auth", authRoutes);

const app = express();
const PORT = 8001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// MongoDB connect
mongoose
  .connect("mongodb://127.0.0.1:27017/civic_db")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.error(err));

// Start server
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
