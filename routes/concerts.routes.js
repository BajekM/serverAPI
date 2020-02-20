const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuidv1 = require('uuid/v1');

router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
  });
  
  router.route('/concerts').post((req, res) => {
    const {author, text} = req.body;
    const obj = {
      id: uuidv1(),
      author,
      text,
    };
    db.concerts.push(obj);
    // res.json(obj);
    res.json({ message: 'OK' });
  });
  
  router.route('/concerts/random').get((req, res) => {
    res.json(db.concerts[Math.floor(Math.random() * db.concerts.length)]);
  });
  
  router.route('/concerts/:id').get((req, res) => {
    for (let elem of db.concerts) {
      if (elem.id == req.params.id) {
        res.json(elem);
      }
    }
  });
  
  router.route('/concerts/:id').put((req, res) => {
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
  
  router.route('/concerts/:id').delete((req, res) => {
    for (let elem of db.concerts) {
      if (elem.id == req.params.id) {
        db.concerts.splice(db.concerts.indexOf(elem), 1)
      }
    }
    // res.json(db);
    res.json({ message: 'OK' });
  });

  module.exports = router;