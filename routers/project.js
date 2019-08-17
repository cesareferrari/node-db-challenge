const express = require('express');
const router = express.Router();

const db = require('../data/db-config.js');

// GET /api/projects/
router.get('/', async (req, res) => {
  const projects = await db('projects');
  res.status(200).json(projects);
});

module.exports = router;
