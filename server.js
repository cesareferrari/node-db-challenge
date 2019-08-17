const express = require('express');
const server = express();
const projectRouter = require('./routers/project.js');

server.use(express.json());
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to the Project Tracker API</h1>');
});

module.exports = server;
