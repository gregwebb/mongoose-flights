const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
  };

  function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All Flights', flights });
    });
  }

  function newFlight(req, res) {
    res.render('flights/new');
  }

  function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
      res.redirect('/flights');
    });
  }
  
  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', {flight})
  });
}