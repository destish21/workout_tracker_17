const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 6027;

app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/workout';
 mongoose.connect(MONGODB_URL, {
     useNewUrlParser: true,
     useFindAndModify: false
 })