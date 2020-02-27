const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuidv1 = require('uuid/v1');


router.route('/seats').get((req, res) => {
    res.json(db.seats);
  });
  
  router.route('/seats').post((req, res) => {
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
        res.json(obj);
        res.json({ message: 'OK' });
    }else {
      res.json({ message: "The slot is already taken..." })
    }
      
  });
  
  router.route('/seats/random').get((req, res) => {
    res.json(db.seats[Math.floor(Math.random() * db.seats.length)]);
  });
  
  router.route('/seats/:id').get((req, res) => {
    for (let elem of db.seats.filter(seat => seat.id == req.params.id)) {
      res.json(elem);
    }
  });
  
  router.route('/seats/:id').put((req, res) => {
    const {day, seat, client, email} = req.body;
    const elem = db.seats.find(seat => seat.id == req.params.id)
      elem.day = day;
      elem.seat = seat;
      elem.clien = client;
      elem.email = email
         
    res.json({ message: 'OK' });
  });
  
  router.route('/seats/:id').delete((req, res) => {
    db.seats.splice(db.seats.indexOf(db.seats.find(seat => seat.id == req.params.id)), 1)
    res.json({ message: 'OK' });
  });

  module.exports = router;