// routes/assignmentRoutes.js
const express = require('express');
const Assignment = require('../models/AssignmentModel');

const router = express.Router();

// Route to create a new assignment
router.post('/', async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    res.status(201).send(assignment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all assignments
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.send(assignments);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
