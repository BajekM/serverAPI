const Concert = require('../models/concert.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Concert.find());
    }
      catch(err) {
        res.status(500).json({ message: err });
    }  
};

exports.addNew = async (req, res) => {

    try {
        const {performer, genre, price, day, image} = req.body;
        const newConcert = new Concert({ peformer: performer, genre: genre, price: price, day: day, image: image });
        await newConcert.save();
        res.json({ message: 'OK' });
  
    } catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getRandom = async (req, res) => {
    try {
        const count = await Concert.countDocuments();
        const rand = Math.floor(Math.random() * count);
        const conc = await Concert.findOne().skip(rand);
        if(!conc) res.status(404).json({ message: 'Not found' });
        else res.json(conc);
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {

    try {
        const conc = await Concert.findById(req.params.id);
        if(!conc) res.status(404).json({ message: 'Not found' });
        else res.json(conc);
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.modify = async (req, res) => {

    const {performer, genre, price, day, image} = req.body;
    
    try {
      await Concert.updateOne({ _id: sanitize(req.params.id) }, { $set: { peformer: sanitize(performer), genre: sanitize(genre), price: sanitize(price), day: sanitize(day), image: sanitize(image)  }, });
      res.json({ message: 'OK' });
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};



exports.delete = async (req, res) => {
    try {
        const conc = await(Concert.findById(req.params.id));
        if(conc) {
          await Concert.deleteOne({ _id: req.params.id });
          res.json({ message: 'OK' });
        }
        else res.status(404).json({ message: 'Not found...' });
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getByPerformer = async (req, res) => {

    try {
        const conc = await Concert.find({performer: req.params.performer});
        if(!conc) res.status(404).json({ message: 'Not found' });
        else res.json(conc);
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getByGenre = async (req, res) => {

    try {
        const conc = await Concert.find({genre: req.params.genre});
        if(!conc) res.status(404).json({ message: 'Not found' });
        else res.json(conc);
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getByDay = async (req, res) => {

    try {
        const conc = await Concert.find({day: req.params.day});
        if(!conc) res.status(404).json({ message: 'Not found' });
        else res.json(conc);
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getByPrice = async (req, res) => {

    try {
        const conc = await Concert.find({ $and: [{ price: { $lte: req.params.price_max }}, { price: { $gte: req.params.price_min }}] });
        if(!conc) res.status(404).json({ message: 'Not found' });
        else res.json(conc);
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};