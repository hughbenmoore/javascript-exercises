const convertToCelsius = function(num) {
  let celsius = 5/9 * (num - 32);
  let roundedC = Math.round(celsius * 10) / 10;
  return roundedC;
};

const convertToFahrenheit = function(num) {
  let fahrenheit = 9/5 * (num) + 32;
  let roundedF = Math.round(fahrenheit * 10) / 10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
