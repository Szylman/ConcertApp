const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const uuid = require('uuid').v4;
const db = require('./db');


//import routes
const testimonialRoutes = require('./routes/testimonials.routes');
const concertRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/', testimonialRoutes);
app.use('/api', concertRoutes);
app.use('/api', seatsRoutes);

app.use((req, res) => {
    res.status(404).json('404 not found...');
})

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});