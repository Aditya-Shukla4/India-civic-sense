const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    email: String,
    severity: String,
    lat: String,
    lng: String,
    photo: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
