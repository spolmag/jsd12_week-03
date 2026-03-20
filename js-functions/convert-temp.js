import readline from "readline"; //Import readline function from node clound -> for make terminal interact with user

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

//call createInterface function from readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter temperature: ", function (tempInput) {
  const temp = parseFloat(tempInput);
  rl.question("Celsius-C or Fahrenheit-F: ", function (unitInput) {
    const unit = unitInput.trim().toUpperCase();
    let result;
    if (unit === "C") {
      result = celsiusToFahrenheit(temp);
      console.log(`${temp}C is ${result.toFixed(2)}F`);
    } else if (unit === "F") {
      result = fahrenheitToCelsius(temp);
      console.log(`${temp}F is ${result.toFixed(2)}C`);
    } else {
      console.log(`Invalid unit! Please enter C or F.`);
    }
    rl.close();
  });
});
