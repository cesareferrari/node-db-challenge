const express = require('express');
const router = express.Router();
const Task = require('../models/task.js');

// GET /api/tasks/
router.get('/', async (req, res) => {
  const tasks = await Task.all();

  try {
    if (tasks && tasks.length > 0) {
      res.status(200).json(tasks);
    } else {
      res.status(404).json({message: "No tasks available"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Error retrieving tasks", error: err})
  }
});


module.exports = router;
