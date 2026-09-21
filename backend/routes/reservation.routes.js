const express = require("express");

const {
  createReservation,
  getReservations,
  getReservation,
  updateReservationStatus
} = require("../controllers/reservation.controller");

const router = express.Router();

router.post("/", createReservation);
router.get("/", getReservations);
router.get("/:id", getReservation);
router.patch("/:id/status", updateReservationStatus);

module.exports = router;