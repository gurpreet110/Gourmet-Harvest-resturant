const Menu = require("../models/menu.model");

const getMenu = async (req, res) => {
  try {
    const { search, category } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.name = {
        $regex: search,
        $options: "i"
      };
    }

    const menu = await Menu.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: menu.length,
      menu
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu",
      error: error.message
    });
  }
};

const getSingleMenuItem = async (req, res) => {
  try {
    const item = await Menu.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Menu item not found"
      });
    }

    res.status(200).json({
      success: true,
      item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu item",
      error: error.message
    });
  }
};

const createMenuItem = async (req, res) => {
  try {
    const item = await Menu.create(req.body);

    res.status(201).json({
      success: true,
      message: "Menu item created successfully",
      item
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create menu item",
      error: error.message
    });
  }
};

module.exports = {
  getMenu,
  getSingleMenuItem,
  createMenuItem
};