const express = require('express');
const router = express.Router();
const SeatsController = require('../controllers/seats.controller');
// const db = require('./../db');
// const uuidv1 = require('uuid/v1');

router.get('/seats', SeatsController.getAll)
  
router.post('/seats', SeatsController.addNew)
  
router.get('/seats/random', SeatsController.getRandom)
  
router.get('/seats/:id', SeatsController.getById)
  
router.put('/seats/:id', SeatsController.modify)
  
router.delete('/seats/:id', SeatsController.delete)

module.exports = router;