const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    issue: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      enum: [
        "open",
        "in-progress",
        "resolved"
      ],
      default: "open"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Support",
  supportSchema
);