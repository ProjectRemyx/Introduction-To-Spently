const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const pricing = require('./routes/api/pricing');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser:true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));

app.use('/api/pricing', pricing);

const port = process.env.PORT || 5000;

app.listen(port , () => console.log(`Server started on port ${port}`));