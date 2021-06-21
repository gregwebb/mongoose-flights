const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let destinationSchema = new Schema({
  airport: {
      type: String,
      enum: ['AUS','DAL','LAX','SAN', 'SEA']
  },
  arrival: {
      type: Date
  } 
})

const flightSchema = new Schema({
    airline: {
      type: String, 
      enum: ['American','Delta','Southwest','United']
    },
    airport: {
      type: String, default: 'DEN', 
      enum: ['ATL','DFW','DEN','LAX','SAN']
    },
    flightNo: {
      type: Number, 
      min: 10, 
      max: 9999
    },
    departs: {
      type: Date, 
    },
    destinations: [destinationSchema],
  });

  module.exports = mongoose.model('Flight', flightSchema);