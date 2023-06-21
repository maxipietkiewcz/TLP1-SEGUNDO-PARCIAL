// Imports
const cors = require("cors");
const express = require("express");
const path = require("path");
const reservaRoutes = require("./routes/reserva.routes");
const ejs = require("ejs");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "public")));

// Configuración del motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/reservas", reservaRoutes);

// Manejo de errores
app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Starting the server
const port = process.env.PORT || 3000; // Obtener el número de puerto desde las variables de entorno o utilizar el puerto 3000 como predeterminado
app.listen(port, () => console.log(`Server is running on port ${port}`));





