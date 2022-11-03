const express = require('express');
const router = express.Router();
const SeatController = require('../controllers/seats.controller')

// SEATS

router.get('/seats', SeatController.getAll);

router.get('/seats/:id', SeatController.getById);

router.put('/seats/:id', SeatController.update);

router.delete('/seats/:id', SeatController.delete);

router.post('/seats', SeatController.add);

module.exports = router;