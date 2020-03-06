const express = require('express');
const router = express.Router();
const TestimonialsController = require('../controllers/testimonials.controller');
// const db = require('./../db');
// const uuidv1 = require('uuid/v1');

router.get('/testimonials', TestimonialsController.getAll)
  
router.post('/testimonials', TestimonialsController.addNew)
  
router.get('/testimonials/random', TestimonialsController.getRandom)
  
router.get('/testimonials/:id', TestimonialsController.getById)
  
router.put('/testimonials/:id', TestimonialsController.modify)
  
router.delete('/testimonials/:id', TestimonialsController.delete)

module.exports = router;