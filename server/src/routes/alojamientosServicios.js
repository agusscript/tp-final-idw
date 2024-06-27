const express = require('express');
const router = express.Router();
const alojamientoServicioController = require('../controllers/alojamientosServiciosController');

router.get('/getAlojamientoServicios/:idAlojamiento', alojamientoServicioController.getAllAlojamientoServiciosByIdAlojamiento);

router.get('/getAllAlojamientoServicios', alojamientoServicioController.getAllAlojamientoServicios);

router.get('/getAlojamientoServicio/:id', alojamientoServicioController.getAlojamientoServicioById);

router.post('/createAlojamientoServicio', alojamientoServicioController.createAlojamientoServicio);

router.put('/updateAlojamientoServicio/:id', alojamientoServicioController.updateAlojamientoServicio);

router.delete('/deleteAlojamientoServicio/:id', alojamientoServicioController.deleteAlojamientoServicio);

module.exports = router;
