var Calculator = require('../build/js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#adding').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(num1, num2);

      $('#result').append("<ol>" + output + "</ol>");

  });
});


$(document).ready(function() {
  $('#subtracting').submit(function(event) {
    event.preventDefault();
    var num3 = parseInt($('#num3').val());
    var num4 = parseInt($('#num4').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.subtract(num3, num4);

      $('#result').append("<ol>" + output + "</ol>");

  });
});


$(document).ready(function() {
  $('#multiplying').submit(function(event) {
    event.preventDefault();
    var num5 = parseInt($('#num5').val());
    var num6 = parseInt($('#num6').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.multiply(num5, num6);

      $('#result').append("<ol>" + output + "</ol>");

  });
});
