const express = require('express');
const router = express.Router();
const imagenesController = require('../controllers/imagenController');

router.get('/getAllImagenes', imagenesController.getAllImagenes);

router.get('/getImagen/:id', imagenesController.getImagenById);

router.post('/createImagen', imagenesController.createImagen);

router.put('/updateImagen/:id', imagenesController.updateImagen);

router.delete('/deleteImagen/:id', imagenesController.deleteImagen);

module.exports = router;
