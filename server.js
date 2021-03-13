const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 6027;

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
const db = require("./models");

// const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/workout';
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});

 require('./routes/apiRoutes')(app);
 require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`APP listen on port ${PORT}`);
})