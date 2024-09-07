// dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
