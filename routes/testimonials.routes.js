const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuidv1 = require('uuid/v1');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
  });
  
  router.route('/testimonials').post((req, res) => {
    const {author, text} = req.body;
    const obj = {
      id: uuidv1(),
      author,
      text,
    };
    db.testimonials.push(obj);
    res.json(obj);
    res.json({ message: 'OK' });
  });
  
  router.route('/testimonials/random').get((req, res) => {
    res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
  });
  
  router.route('/testimonials/:id').get((req, res) => {
    res.json(db.testimonials.find(testimonial => testimonial.id == req.params.id))
  });
  
  router.route('/testimonials/:id').put((req, res) => {
    const {author, text} = req.body;
    const elem = db.testimonials.find(testimonial => testimonial.id == req.params.id)

    elem.author = author;
    elem.text = text; 
     
    res.json({ message: 'OK' });
  });
  
  router.route('/testimonials/:id').delete((req, res) => {
    db.testimonials.splice(db.testimonials.indexOf(db.testimonials.find(testimonial => testimonial.id == req.params.id)), 1)
    res.json({ message: 'OK' });
  });

  module.exports = router;