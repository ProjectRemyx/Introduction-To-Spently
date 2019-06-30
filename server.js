//Require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); 

const pricing = require('./routes/api/pricing');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

//Connect to db
mongoose
    .connect(db, { useNewUrlParser:true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/pricing', pricing);

/* Built React client on server */
//Serve static assets if in production
if(process.env.NODE_ENV === 'production')
{
    //Set static folder
    app.use(express.static('client/build'));

    //If anything that's not /api/pricing build our React app
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port , () => console.log(`Server started on port ${port}`));