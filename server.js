const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
const wordRoutes = require("./routes/word.routes");

// Permet de récupérer les variables d'env
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const app = express();

// Config express pour les requêtres extérieur
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId", "Content-Type"],
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
  preflightContinue: false,
};
app.use(cors(corsOptions));

// Body parser pour traiter les bodys
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/word", wordRoutes);

// Serveur
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
