const dbConnection = require('../config/dbConfig');

exports.getAllAlojamientos = async (req, res) => {
  try {
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM alojamientos');
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alojamientos' });
  }
};

exports.getAlojamientoById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM alojamientos WHERE idAlojamiento = ?', [id]);
    connection.release();
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el alojamiento' });
  }
};

exports.createAlojamiento = async (req, res) => {
  console.log(req.body);
  try {
    const nuevoAlojamiento = req.body;
    const connection = await dbConnection.getConnection();
    const [results] = await connection.query('INSERT INTO alojamientos SET ?', nuevoAlojamiento);
    connection.release();
    res.json({ message: 'Alojamiento creado correctamente', id: results.insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al crear el alojamiento' });
  }
};

exports.updateAlojamiento = async (req, res) => {
  try {
    const { id } = req.params;
    const datosAActualizar = req.body;
    const connection = await dbConnection.getConnection();
    await connection.query('UPDATE alojamientos SET ? WHERE idAlojamiento = ?', [datosAActualizar, id]);
    connection.release();
    res.json({ message: 'Alojamiento actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el alojamiento' });
  }
};

exports.deleteAlojamiento = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    await connection.query('DELETE FROM alojamientos WHERE idAlojamiento = ?', [id]);
    connection.release();
    res.json({ message: 'Alojamiento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el alojamiento' });
  }
};
