var Calculator = require('../build/js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#adding').submit(function(event) {
    event.preventDefault();
    var num1 = parseFloat($('#num1').val());
    var num2 = parseFloat($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(num1, num2);

      $('#result').append("<ol>" + output + "</ol>");

  });
});


$(document).ready(function() {
  $('#subtracting').submit(function(event) {
    event.preventDefault();
    var num3 = parseFloat($('#num3').val());
    var num4 = parseFloat($('#num4').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.subtract(num3, num4);

      $('#result').append("<ol>" + output + "</ol>");

  });
});


$(document).ready(function() {
  $('#multiplying').submit(function(event) {
    event.preventDefault();
    var num5 = parseFloat($('#num5').val());
    var num6 = parseFloat($('#num6').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.multiply(num5, num6);

      $('#result').append("<ol>" + output + "</ol>");

  });
});

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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
