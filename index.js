const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./user.js');

const app = express();
app.use(bodyParser.json());

const PORT = 8080;
//Creating general middleware for all routes to overide cors and help send response to any server
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //second param is name of domain
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // console.log('got request ')
  next();
});

app.use('/users', userRoute);

var listener = app.listen(PORT, () =>
  console.log(`Server Running on Port: ${PORT}`)
);
