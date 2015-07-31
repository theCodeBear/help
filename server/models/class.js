'use strict';

var mongoose = require('mongoose');
var Class;

var classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacher: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  scheduledDate: { type: Date, required: true },
  students: [{ type: mongoose.Schema.ObjectId, ref: 'User', default: {} }],
  teacherPoints: Number
});

Class = mongoose.model('Class', classSchema);
module.exports = Class;