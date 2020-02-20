const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuidv1 = require('uuid/v1');

router.route('/seats').get((req, res) => {
    res.json(db.seats);
  });
  
  router.route('/seats').post((req, res) => {
    const {author, text} = req.body;
    const obj = {
      id: uuidv1(),
      author,
      text,
    };
    db.seats.push(obj);
    // res.json(obj);
    res.json({ message: 'OK' });
  });
  
  router.route('/seats/random').get((req, res) => {
    res.json(db.seats[Math.floor(Math.random() * db.seats.length)]);
  });
  
  router.route('/seats/:id').get((req, res) => {
    for (let elem of db.seats) {
      if (elem.id == req.params.id) {
        res.json(elem);
      }
    }
  });
  
  router.route('/seats/:id').put((req, res) => {
    const {author, text} = req.body;
    for (let elem of db.seats) {
      if (elem.id == req.params.id) {
        elem.author = author;
        elem.text = text;
        // res.json(elem);
      }
    }
    res.json({ message: 'OK' });
  });
  
  router.route('/seats/:id').delete((req, res) => {
    for (let elem of db.seats) {
      if (elem.id == req.params.id) {
        db.seats.splice(db.seats.indexOf(elem), 1)
      }
    }
    // res.json(db);
    res.json({ message: 'OK' });
  });

  module.exports = router;