const dbConnection = require('../config/dbConfig');

exports.getAllTiposAlojamiento = async (req, res) => {
  try {
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM  tiposalojamiento');
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los tipos de alojamiento' });
  }
};

exports.getTipoAlojamientoById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    const [rows] = await connection.query('SELECT * FROM  tiposalojamiento WHERE idTipoAlojamiento = ?', [id]);
    connection.release();
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el tipo de alojamiento' });
  }
};

exports. createTipoAlojamiento = async (req, res) => {
  try {
    const nuevoTipoAlojamiento = req.body;
    console.log('ingresa');
    const connection = await dbConnection.getConnection();
    const [results] = await connection.query('INSERT INTO  tiposalojamiento SET ?', nuevoTipoAlojamiento);
    connection.release();
    res.json({ message: 'Tipo de alojamiento creado correctamente', id: results.insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al crear el tipo de alojamiento' });
  }
};

exports.updateTipoAlojamiento = async (req, res) => {
  try {
    const { id } = req.params;
    const datosAActualizar = req.body;
    const connection = await dbConnection.getConnection();
    await connection.query('UPDATE  tiposalojamiento SET ? WHERE idTipoAlojamiento = ?', [datosAActualizar, id]);
    connection.release();
    res.json({ message: 'Tipo de alojamiento actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el tipo de alojamiento' });
  }
};

exports.deleteTipoAlojamiento = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await dbConnection.getConnection();
    await connection.query('DELETE FROM tiposalojamiento WHERE idTipoAlojamiento = ?', [id]);
    connection.release();
    res.json({ message: 'Tipo de alojamiento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el tipo de alojamiento' });
  }
};
