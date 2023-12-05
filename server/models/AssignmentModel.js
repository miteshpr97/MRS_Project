// models/AssignmentModel.js
const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  code: String,
  assignment: String,
  from: String,
  to: String,
  assign_date: Date,
  deadline_date: Date,
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
