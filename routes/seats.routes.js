const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuidv1 = require('uuid/v1');


router.route('/api/seats').get((req, res) => {
    res.json(db.seats);
  });
  
  router.route('/api/seats').post((req, res) => {
    const {day, seat, client, email} = req.body;
    const obj = {
      id: uuidv1(),
      day,
      seat,
      client,
      email,
    };

    let condition = true;

    for (let elem of db.seats) {
      if (obj.day == elem.day && obj.seat == elem.seat) {
        condition = false;
        break;
      } else {
        continue;
      }
    }

    if (condition) {
      db.seats.push(obj);
        // res.json(obj);
        res.json({ message: 'OK' });
    }else {
      res.json({ message: "The slot is already taken..." })
    }
      
  });
  
  router.route('/api/seats/random').get((req, res) => {
    res.json(db.seats[Math.floor(Math.random() * db.seats.length)]);
  });
  
  router.route('/api/seats/:id').get((req, res) => {
    for (let elem of db.seats) {
      if (elem.id == req.params.id) {
        res.json(elem);
      }
    }
  });
  
  router.route('/api/seats/:id').put((req, res) => {
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
  
  router.route('/api/seats/:id').delete((req, res) => {
    for (let elem of db.seats) {
      if (elem.id == req.params.id) {
        db.seats.splice(db.seats.indexOf(elem), 1)
      }
    }
    // res.json(db);
    res.json({ message: 'OK' });
  });

  module.exports = router;