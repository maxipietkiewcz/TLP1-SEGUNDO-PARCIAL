// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const express = require("express");
const router = express.Router();
const {
  obtenerReservas,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} = require("../controllers/reserva.controllers");

// Obtener todas las reservas
router.get("/", obtenerReservas);

// Crear una reserva
router.post("/crear", crearReserva);

// Actualizar una reserva
router.put("/editar/:id", actualizarReserva);

// Eliminar una reserva
router.delete("/:id", eliminarReserva);

module.exports = router;



