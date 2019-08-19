const express = require('express');
const router = express.Router();
const Project = require('../models/project.js');


// GET /api/projects/
router.get('/', async (req, res) => {
  const projects = await Project.all();

  try {
    if (projects && projects.length > 0) {
      res.status(200).json(projects);
    } else {
      res.status(404).json({message: "No projects available"});
    }
  } catch (err) {
    res.status(500).json({message: "Error retrieving projects", error: err})
  }
});

// POST /api/projects/
router.post('/', async (req, res) => {
  const projectData = req.body;

  try {
    const project = await Project.create(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({message: "Error saving project", error: err})
  }
});

// POST /api/projects/1/tasks
router.post('/:id/tasks', async (req, res) => {
  const {id} = req.params;
  const taskData = req.body;

  try {
    const project = Project.find({id});

    if (project) {
      const task = await Project.addTask({...taskData, project_id: id});
      res.status(201).json(task);
    } else {
      res.status(404).json({message: "Cannot find project with this id"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Error saving task", error: err})
  }
});

module.exports = router;
