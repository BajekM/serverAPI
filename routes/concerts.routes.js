const express = require('express');
const router = express.Router();
const ConcertsController = require('../controllers/concerts.controller');
// const db = require('./../db');
// const uuidv1 = require('uuid/v1');

router.get('/concerts', ConcertsController.getAll)
  
router.post('/concerts', ConcertsController.addNew)
  
router.get('/concerts/random', ConcertsController.getRandom)
  
router.get('/concerts/:id', ConcertsController.getById)
  
router.put('/concerts/:id', ConcertsController.modify)
  
router.delete('/concerts/:id', ConcertsController.delete)

router.get('/concerts/performer/:performer', ConcertsController.getByPerformer)

router.get('/concerts/genre/:genre', ConcertsController.getByGenre)

router.get('/concerts/price/day/:day', ConcertsController.getByDay)

router.get('/concerts/price/:price_min/:price_max', ConcertsController.getByPrice)

module.exports = router;