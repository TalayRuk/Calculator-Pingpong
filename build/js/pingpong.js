function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else {
      output.push(i);
    }
  }
  return output;
}

Calculator.prototype.add = function(num1, num2) {
  var output = num1 + num2;
  return output;
}

Calculator.prototype.subtract = function (num3, num4) {
  var output = num3 - num4;
  return output;
}

Calculator.prototype.multiply = function (num5, num6) {
  var output = num5 * num6;
  return output;
}


exports.calculatorModule = Calculator;


// function Calculator(constructorParameter) {
//   // constructor
// }
//
// Calculator.prototype.pingPong = function(methodParameter) {
//   // method code
// }
//
// exports.calculatorModule = Calculator;
