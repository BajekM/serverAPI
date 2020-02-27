const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuidv1 = require('uuid/v1');

router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
  });
  
  router.route('/concerts').post((req, res) => {
    const {performer, genre, price, day, image} = req.body;
    const obj = {
      id: uuidv1(),
      performer,
      genre,
      price,
      day,
      image,
    };
    db.concerts.push(obj);
    res.json(obj);
    res.json({ message: 'OK' });
  });
  
  router.route('/concerts/random').get((req, res) => {
    res.json(db.concerts[Math.floor(Math.random() * db.concerts.length)]);
  });
  
  router.route('/concerts/:id').get((req, res) => {
    res.json(db.concerts.find(concert => concert.id == req.params.id))
  });
  
  router.route('/concerts/:id').put((req, res) => {
    const {performer, genre, price, day, image} = req.body;
    const elem = db.concerts.find(concert => concert.id == req.params.id) 
      elem.performer = performer;
      elem.genre = genre;
      elem.price = price;
      elem.day = day;
      elem.image = image;
      res.json(elem);
    
    res.json({ message: 'OK' });
  });
  
  router.route('/concerts/:id').delete((req, res) => {
    db.concerts.splice(db.concerts.indexOf(db.concerts.find(concert => concert.id == req.params.id)), 1)
    res.json({ message: 'OK' });
  });

  module.exports = router;