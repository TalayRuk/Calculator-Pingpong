var Calculator = require('../build/js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

// $(document).ready(function() {
//   var simpleCalculator = new Calculator("a string");
//   var output = simpleCalculator.pingPong(1000);
// });
