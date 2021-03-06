const express = require('express');
const cors = require('cors');
const path = require('path');
const socket = require('socket.io');
const mongoose = require('mongoose');
const helmet = require('helmet');


const ConcertsController = require('./controllers/concerts.controller');
const SeatsController = require('./controllers/seats.controller');

const app = express();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/client/NewWaveFest/build')));
app.use(helmet());

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/NewWaveFest/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

mongoose.connect('mongodb+srv://' + process.env.login + ':' + process.env.password + '@cluster0-4ieif.mongodb.net/NewWaveDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

module.exports = server;

const io = socket(server);

io.on('connection', () => {
  console.log('New socket!');
});