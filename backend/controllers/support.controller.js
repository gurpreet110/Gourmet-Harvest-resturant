const Support = require("../models/support.model");

const createSupportRequest = async (req, res) => {
  try {
    const request = await Support.create(req.body);

    res.status(201).json({
      success: true,
      message: "Support request submitted successfully",
      request
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to submit support request",
      error: error.message
    });
  }
};

const getSupportRequests = async (req, res) => {
  try {
    const requests = await Support.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: requests.length,
      requests
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch support requests",
      error: error.message
    });
  }
};

module.exports = {
  createSupportRequest,
  getSupportRequests
};