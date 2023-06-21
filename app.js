// Imports
const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();

// Middlewares
app.use(cors()); // Habilitar CORS para permitir solicitudes desde cualquier origen
app.use(express.json()); // Habilitar el análisis del cuerpo de las solicitudes en formato JSON

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./routes/reserva.routes"));

// Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Starting the server
const port = process.env.PORT || 3000; // Obtener el número de puerto desde las variables de entorno o utilizar el puerto 3000 como predeterminado
app.listen(port, () => console.log(`Server is running on port ${port}`));
