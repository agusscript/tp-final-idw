const dbConnection = require('../config/dbConfig');

exports.getAllAlojamientoServicios = async (req, res) => {
  try {
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM alojamientoservicios');
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alojamientoservicios' });
  }
};

exports.getAlojamientoServicioById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM alojamientoservicios WHERE idAlojamientoServicio = ?', [id]);
    connection.release();
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alojamientoservicios' });
  }
};

exports.getAllAlojamientoServiciosByIdAlojamiento = async (req, res) => {
  try {
    const { idAlojamiento } = req.params;
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM alojamientoservicios WHERE idAlojamiento = ?', [idAlojamiento]);
    connection.release();
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al obtener el alojamientoservicio' });
  }
};

exports.createAlojamientoServicio = async (req, res) => {
  try {
    const nuevoAlojamientoServicio = req.body;
    const connection = await dbConnection.getConnection();
    const [results] = await connection.query('INSERT INTO alojamientoservicios SET ?', nuevoAlojamientoServicio);
    connection.release();
    res.json({ message: 'AlojamientoServicio creado correctamente', id: results.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el alojamientoservicio' });
  }
};

exports.updateAlojamientoServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const datosAActualizar = req.body;
    const connection = await dbConnection.getConnection();
    await connection.query('UPDATE alojamientoservicios SET ? WHERE idAlojamientoServicio = ?', [datosAActualizar, id]);
    connection.release();
    res.json({ message: 'AlojamientoServicio actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el alojamientoservicio' });
  }
};

exports.deleteAlojamientoServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    await connection.query('DELETE FROM alojamientoservicios WHERE idAlojamientoServicio = ?', [id]);
    connection.release();
    res.json({ message: 'AlojamientoServicio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el alojamientoservicio' });
  }
};
