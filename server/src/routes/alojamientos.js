const express = require('express');
const router = express.Router();
const alojamientoController = require('../controllers/alojamientoController');

router.get('/getAlojamientos', alojamientoController.getAllAlojamientos);

router.get('/getAlojamiento/:id', alojamientoController.getAlojamientoById);

router.post('/createAlojamiento', alojamientoController.createAlojamiento);

router.put('/putAlojamiento/:id', alojamientoController.updateAlojamiento);

router.delete('/deleteAlojamiento/:id', alojamientoController.deleteAlojamiento);

module.exports = router;