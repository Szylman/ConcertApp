const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const socket = require('socket.io');
const mongoose = require('mongoose');

const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: 8000');
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// connects our backend code with the database
mongoose.connect('mongodb+srv://Szylman:qwerty123@cluster0.iarn6tt.mongodb.net/ConcertDB',
);
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

const io = socket(server);

io.on('connection', (socket) => {   

    console.log('New socket!')
});

app.use((req, res, next) => {
    req.io = io;
    next();
});

//import routes
const testimonialRoutes = require('./routes/testimonials.routes');
const concertRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use('/api/', testimonialRoutes);
app.use('/api/', concertRoutes);
app.use('/api/', seatsRoutes);

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
    res.status(404).json('404 not found...');
})

