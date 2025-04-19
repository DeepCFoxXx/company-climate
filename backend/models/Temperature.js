const mongoose = require('mongoose');

const temperatureSchema = new mongoose.Schema({
  values: [Number],
  closest: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Temperature', temperatureSchema);
