const express = require("express");

const {
  getMenu,
  getSingleMenuItem,
  createMenuItem
} = require("../controllers/menu.controller");

const router = express.Router();

router.get("/", getMenu);
router.get("/:id", getSingleMenuItem);
router.post("/", createMenuItem);

module.exports = router;