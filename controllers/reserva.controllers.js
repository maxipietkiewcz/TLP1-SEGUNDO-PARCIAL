const Reserva = require("../models/dbreservas");

// Obtener todas las reservas
const obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.render("index", { reservas });
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
    res.status(500).json({ mensaje: "Error al obtener las reservas" });
  }
};

// Crear una reserva
const crearReserva = async (req, res) => {
  const { nombrePasajero, origen, destino, fecha } = req.body;

  try {
    const reserva = await Reserva.create({
      nombrePasajero,
      origen,
      destino,
      fecha,
    });
    res.render("crear_reserva", { reservas });
  } catch (error) {
    console.error("Error al crear la reserva:", error);
    res.status(500).json({ mensaje: "Error al crear la reserva" });
  }
};

// Actualizar una reserva
const actualizarReserva = async (req, res) => {
  const reservaId = req.params.id;
  const { nombrePasajero, origen, destino, fecha } = req.body;

  try {
    await Reserva.update(
      { nombrePasajero, origen, destino, fecha },
      { where: { id: reservaId } }
    );
    res.render("editar-reserva ", { reservaId });
  } catch (error) {
    console.error("Error al actualizar la reserva:", error);
    res.status(500).json({ mensaje: "Error al actualizar la reserva" });
  }
};

// Eliminar una reserva
const eliminarReserva = async (req, res) => {
  const reservaId = req.params.id;

  try {
    await Reserva.destroy({ where: { id: reservaId } });
    res.json({ mensaje: "Reserva eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    res.status(500).json({ mensaje: "Error al eliminar la reserva" });
  }
};

module.exports = {
  obtenerReservas,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
};
