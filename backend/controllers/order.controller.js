const Order = require("../models/order.model");

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to place order",
      error: error.message
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.menuItem")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch orders",
      error: error.message
    });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(
      req.params.id
    ).populate("items.menuItem");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    res.status(200).json({
      success: true,
      order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch order",
      error: error.message
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrder
};