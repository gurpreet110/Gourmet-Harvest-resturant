# 🍽️ Gourmet Harvest

Gourmet Harvest is a full-stack restaurant platform designed to provide a simple and responsive experience for exploring restaurant menus and handling core restaurant operations.

The project initially started as a frontend restaurant interface and is being developed into a full-stack application using **React, Node.js, Express, MongoDB, and REST APIs**.

The main focus of the project is to understand and implement the complete flow between a modern frontend, backend APIs, and a database.

---

## ✨ Features

### 👨‍🍳 Restaurant & Customer Interface

* Responsive restaurant website
* Restaurant information and introduction
* Menu browsing
* Category-based menu filtering
* Individual menu item cards
* Table reservation form
* Contact form
* Customer support form
* Structured order management

### ⚛️ React Frontend

* Component-based React architecture
* Vite development environment
* Reusable UI components
* React state management
* Form handling
* Responsive layout
* Separate components for major restaurant sections

### 🛠️ Backend

* Node.js and Express REST API
* MVC-style project structure
* Separate routes and controllers
* Mongoose-based database interaction
* Centralized error-handling middleware
* APIs for menu, reservations, contact, support and orders

### 🗄️ Database

* MongoDB integration
* Mongoose schemas and models
* Structured data management for:

  * Menu items
  * Reservations
  * Contact messages
  * Support requests
  * Orders

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* REST APIs
* Mongoose

### Database

* MongoDB

### Tools

* Git
* GitHub
* npm
* MongoDB Atlas

---

## 🏗️ Application Architecture

The application follows a basic full-stack request-response architecture:

```text
┌──────────────────────┐
│    React Frontend    │
│      (Vite)          │
└──────────┬───────────┘
           │
           │ HTTP / REST API
           ▼
┌──────────────────────┐
│   Node.js + Express  │
│       Backend        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Controllers      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Mongoose Models     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       MongoDB        │
└──────────────────────┘
```

---

## 📂 Project Structure

```text
Gourmet-Harvest/
│
├── frontend/
│   │
│   ├── public/
│   │   └── images/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── MenuCard.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Support.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── data/
│   │   │   ├── menuData.js
│   │   │   └── restaurantData.js
│   │   │
│   │   ├── App.jsx
│   │   ├── Main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── menu.controller.js
│   │   ├── reservation.controller.js
│   │   ├── contact.controller.js
│   │   ├── support.controller.js
│   │   └── order.controller.js
│   │
│   ├── middleware/
│   │   └── error.middleware.js
│   │
│   ├── models/
│   │   ├── menu.model.js
│   │   ├── reservation.model.js
│   │   ├── contact.model.js
│   │   ├── support.model.js
│   │   └── order.model.js
│   │
│   ├── routes/
│   │   ├── menu.routes.js
│   │   ├── reservation.routes.js
│   │   ├── contact.routes.js
│   │   ├── support.routes.js
│   │   └── order.routes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## 🔌 API Structure

The backend provides REST endpoints for the major restaurant operations.

| Module       | Endpoint            | Purpose                       |
| ------------ | ------------------- | ----------------------------- |
| Menu         | `/api/menu`         | Menu data and menu operations |
| Reservations | `/api/reservations` | Table reservation requests    |
| Contact      | `/api/contact`      | Customer contact messages     |
| Support      | `/api/support`      | Customer support requests     |
| Orders       | `/api/orders`       | Order-related operations      |

The intended application flow is:

```text
User Action
    ↓
React Component
    ↓
HTTP Request
    ↓
Express Route
    ↓
Controller
    ↓
Mongoose
    ↓
MongoDB
    ↓
API Response
    ↓
React UI
```

---

## 🗄️ Database Design

MongoDB is used for persistent data storage, with Mongoose providing schema definitions and database interaction.

The backend currently contains separate models for:

### Menu

Stores restaurant menu information such as:

* Name
* Description
* Price
* Category
* Image

### Reservation

Handles table reservation information such as:

* Customer name
* Email
* Phone
* Date
* Time
* Number of guests

### Contact

Stores customer messages and contact information.

### Support

Stores customer support requests.

### Order

Provides the database structure for handling restaurant orders and their items.

---

## 💻 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/gurpreet110/Gourmet-Harvest-resturant.git
```

```bash
cd Gourmet-Harvest-resturant
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Configure environment variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

### 6. Start the backend

```bash
npm run dev
```

---

## 🔐 Environment Variables

Environment-specific configuration is kept in environment variables rather than being hardcoded into the application.

```env
PORT=
MONGO_URI=
FRONTEND_URL=
```

The `.env` file should **never be committed to GitHub**.

---

## ⚠️ Current Limitations

The project is currently being developed progressively, so some features are still incomplete.

* Frontend-backend API integration is still being completed.
* Menu data is currently maintained locally during the React migration.
* Customer authentication and authorization are not implemented yet.
* Complete cart and checkout functionality is pending.
* The admin dashboard is not yet implemented as a complete frontend interface.
* Online payment integration is not implemented.
* Production deployment and complete end-to-end testing are pending.

These are planned extensions rather than currently completed features.

---

## 🔮 Future Scope

The platform can be extended into a more complete restaurant management system.

### 🔐 Authentication & Authorization

* Customer registration and login
* JWT-based authentication
* Protected routes
* Role-based access control
* Separate customer and admin permissions

### 🍽️ Dynamic Menu Management

* Admin menu dashboard
* Add new dishes
* Update menu items
* Delete menu items
* Category management
* Dish availability management

### 🛒 Cart & Ordering

* Add items to cart
* Remove items from cart
* Update item quantities
* Order confirmation
* Customer order history
* Order status tracking

### 💳 Online Payments

* Payment gateway integration
* Secure payment processing
* Payment status tracking
* Failed-payment handling

### 👨‍💼 Admin Dashboard

Administrators could manage:

* Menu items
* Orders
* Reservations
* Customer requests
* Restaurant information

### 🪑 Reservation Management

* Table availability
* Reservation approval/rejection
* Reservation history
* Automated reservation status updates

### 📩 Notifications

* Order confirmation emails
* Reservation notifications
* Order status notifications
* Customer support updates

### ⭐ Customer Experience

* Customer reviews and ratings
* Favorites/wishlist
* Menu search
* Advanced filtering
* Personalized recommendations

### 📊 Restaurant Analytics

An admin dashboard could provide:

* Daily/weekly/monthly orders
* Popular menu items
* Revenue tracking
* Reservation statistics
* Customer activity

### 🔒 Security & Performance

* Request validation
* Authentication security
* Rate limiting
* Better API error handling
* Pagination
* Database query optimization
* Production logging and monitoring

### ☁️ Deployment

Future production deployment can include:

* React frontend deployment
* Node.js backend deployment
* MongoDB Atlas
* Environment-specific configuration
* Production API configuration
* Continuous deployment

---

## 📈 Development Status

| Area                           | Status |
| ------------------------------ | ------ |
| Original Restaurant UI         | ✅      |
| React + Vite Migration         | 🚧     |
| Component Structure            | ✅      |
| Express Backend                | ✅      |
| REST API Structure             | ✅      |
| MongoDB/Mongoose               | ✅      |
| Frontend ↔ Backend Integration | 🚧     |
| Authentication                 | 🔮     |
| Cart & Checkout                | 🔮     |
| Admin Dashboard                | 🔮     |
| Payment Integration            | 🔮     |
| Deployment                     | 🔮     |

**Legend**

* ✅ Completed
* 🚧 In Progress
* 🔮 Planned

---

## 🎯 Learning Objectives

This project is being developed as a hands-on full-stack project to gain practical experience with:

* React component architecture
* State management
* REST API development
* Express routing
* Controller-based backend architecture
* MongoDB and Mongoose
* Frontend-backend communication
* Form handling
* Error handling
* Environment variables
* Git and GitHub workflow
* Full-stack application structure

---

## 👨‍💻 Author

**Gurpreet Singh**

B.Tech CSE (AI)
KCC Institute of Technology & Management

GitHub: **gurpreet110**

---

## ⭐ Project Status

Gourmet Harvest is an actively developed full-stack learning project. The application is being built incrementally, with the frontend, backend, database, and API integration developed as separate parts before being connected into a complete production-ready system.

The goal is not only to build a restaurant application, but also to understand how the different layers of a full-stack application communicate with each other.
