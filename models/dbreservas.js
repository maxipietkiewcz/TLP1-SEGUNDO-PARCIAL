const { Sequelize } = require("sequelize");

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize("dbreservas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Definición del modelo de reservas
const Reserva = sequelize.define("Reserva", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombrePasajero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  origen: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destino: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fecha: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

// Sincronización del modelo con la base de datos
sequelize
  .sync()
  .then(() => {
    console.log(
      "El modelo de Reserva ha sido sincronizado con la base de datos."
    );
  })
  .catch((error) => {
    console.error("Error al sincronizar el modelo de Reserva:", error);
  });

module.exports = Reserva;
