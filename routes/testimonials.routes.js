const express = require('express');
const router = express.Router();
const TestimonialController = require('../controllers/testimonials.controller');

// TESTIMONIALS

router.get('/testimonials', TestimonialController.getAll);

router.get('/testimonials/:id', TestimonialController.getById);

router.put('/testimonials/:id', TestimonialController.update);

router.delete('/testimonials/:id', TestimonialController.delete);

router.post('/testimonials', TestimonialController.add);

module.exports = router;