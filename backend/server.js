const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/error.middleware");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
const menuRoutes = require("./routes/menu.routes");
const reservationRoutes = require("./routes/reservation.routes");
const contactRoutes = require("./routes/contact.routes");
const supportRoutes = require("./routes/support.routes");
const orderRoutes = require("./routes/order.routes");

app.get("/", (req, res) => {
  res.json({
    app: "Gourmet Harvest API",
    status: "running",
    message: "Restaurant management backend is running"
  });
});

app.use("/api/menu", menuRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/support", supportRoutes);
app.use("/api/orders", orderRoutes);

app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(
        `Gourmet Harvest API running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "Server startup failed:",
      error.message
    );
  }
};

startServer();