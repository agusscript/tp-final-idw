const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/servicioController');

router.get('/getAllServicios', serviciosController.getAllServicios);

router.get('/getServicio/:id', serviciosController.getServicioById);

router.post('/createServicio', serviciosController.createServicio);

router.put('/updateServicio/:id', serviciosController.updateServicio);

router.delete('/deleteServicio/:id', serviciosController.deleteServicio);

module.exports = router;
