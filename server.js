const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to the Project tracker API</h1>');
});

module.exports = server;
