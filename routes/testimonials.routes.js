const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuidv1 = require('uuid/v1');

router.route('/api/testimonials').get((req, res) => {
    res.json(db.testimonials);
  });
  
  router.route('/api/testimonials').post((req, res) => {
    const {author, text} = req.body;
    const obj = {
      id: uuidv1(),
      author,
      text,
    };
    db.testimonials.push(obj);
    // res.json(obj);
    res.json({ message: 'OK' });
  });
  
  router.route('/api/testimonials/random').get((req, res) => {
    res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
  });
  
  router.route('/api/testimonials/:id').get((req, res) => {
    for (let elem of db.testimonials) {
      if (elem.id == req.params.id) {
        res.json(elem);
      }
    }
  });
  
  router.route('/api/testimonials/:id').put((req, res) => {
    const {author, text} = req.body;
    for (let elem of db.testimonials) {
      if (elem.id == req.params.id) {
        elem.author = author;
        elem.text = text;
        // res.json(elem);
      }
    }
    res.json({ message: 'OK' });
  });
  
  router.route('/api/testimonials/:id').delete((req, res) => {
    for (let elem of db.testimonials) {
      if (elem.id == req.params.id) {
        db.testimonials.splice(db.testimonials.indexOf(elem), 1)
      }
    }
    // res.json(db);
    res.json({ message: 'OK' });
  });

  module.exports = router;