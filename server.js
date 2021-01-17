const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const cms = require('./routes/api');
const users = require('./routes/api/userRouter');

//Express initialization
const app = express();
app.use(cors());
//bodyParser Middleware
app.use(bodyParser.json());

//Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

//use Routes
app.use('/api', cms);
app.use('/api/user', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
