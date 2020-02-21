const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuidv1 = require('uuid/v1');

router.route('/api/concerts').get((req, res) => {
    res.json(db.concerts);
  });
  
  router.route('/api/concerts').post((req, res) => {
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
    // res.json(obj);
    res.json({ message: 'OK' });
  });
  
  router.route('/api/concerts/random').get((req, res) => {
    res.json(db.concerts[Math.floor(Math.random() * db.concerts.length)]);
  });
  
  router.route('/api/concerts/:id').get((req, res) => {
    for (let elem of db.concerts) {
      if (elem.id == req.params.id) {
        res.json(elem);
      }
    }
  });
  
  router.route('/api/concerts/:id').put((req, res) => {
    const {author, text} = req.body;
    for (let elem of db.concerts) {
      if (elem.id == req.params.id) {
        elem.author = author;
        elem.text = text;
        // res.json(elem);
      }
    }
    res.json({ message: 'OK' });
  });
  
  router.route('/api/concerts/:id').delete((req, res) => {
    for (let elem of db.concerts) {
      if (elem.id == req.params.id) {
        db.concerts.splice(db.concerts.indexOf(elem), 1)
      }
    }
    // res.json(db);
    res.json({ message: 'OK' });
  });

  module.exports = router;