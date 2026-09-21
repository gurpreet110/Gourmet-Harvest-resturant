const Reservation = require("../models/reservation.model");

const createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);

    res.status(201).json({
      success: true,
      message: "Table reservation created successfully",
      reservation
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to create reservation",
      error: error.message
    });
  }
};

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .sort({ date: 1 });

    res.status(200).json({
      success: true,
      count: reservations.length,
      reservations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch reservations",
      error: error.message
    });
  }
};

const getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(
      req.params.id
    );

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found"
      });
    }

    res.status(200).json({
      success: true,
      reservation
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch reservation",
      error: error.message
    });
  }
};

const updateReservationStatus = async (req, res) => {
  try {
    const reservation =
      await Reservation.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status
        },
        {
          new: true,
          runValidators: true
        }
      );

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Reservation status updated",
      reservation
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to update reservation",
      error: error.message
    });
  }
};

module.exports = {
  createReservation,
  getReservations,
  getReservation,
  updateReservationStatus
};