const Contact = require("../models/contact.model");

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message: "Your message has been received",
      contact
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to send message",
      error: error.message
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch messages",
      error: error.message
    });
  }
};

module.exports = {
  createContact,
  getContacts
};