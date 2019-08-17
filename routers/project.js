const express = require('express');
const router = express.Router();
const Project = require('../models/project.js');


// GET /api/projects/
router.get('/', async (req, res) => {
  const projects = await Project.all();
  res.status(200).json(projects);
});

module.exports = router;
