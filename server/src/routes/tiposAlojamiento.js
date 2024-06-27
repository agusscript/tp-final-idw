const express = require('express');
const router = express.Router();
const tipoAlojamientoController = require('../controllers/tipoAlojamientoController');

router.get('/getTiposAlojamiento', tipoAlojamientoController.getAllTiposAlojamiento);

router.get('/getTipoAlojamiento/:id', tipoAlojamientoController.getTipoAlojamientoById);

router.post('/createTipoAlojamiento', tipoAlojamientoController.createTipoAlojamiento);

router.put('/putTipoAlojamiento/:id', tipoAlojamientoController.updateTipoAlojamiento);

router.delete('/deleteTipoAlojamiento/:id', tipoAlojamientoController.deleteTipoAlojamiento);

module.exports = router;
