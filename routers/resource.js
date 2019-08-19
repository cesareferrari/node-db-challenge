const express = require('express');
const router = express.Router();
const Resource = require('../models/resource.js');

// GET /api/resources
router.get('/', async (req, res) => {
  const resources = await Resource.all();

  try {
    if (resources && resources.length > 0) {
      res.status(200).json(resources);
    } else {
      res.status(404).json({message: "No resources available"});
    }
  } catch (err) {
    res.status(500).json({message: "Error retrieving resources", error: err})
  }
});

router.post('/', async (req, res) => {
  const resourceData = req.body;

  try {
    const resource = await Resource.create(resourceData);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({message: "Error saving resource", error: err})
  }
});

module.exports = router;
