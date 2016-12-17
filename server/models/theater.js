var mongoose = require('mongoose');

var theaterSchema = mongoose.Schema({
  theaterName: String
});

var theater = mongoose.model('theater', theaterSchema, 'theater');

module.exports = theater;
