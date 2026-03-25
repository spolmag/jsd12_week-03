// Centimeter to inch: CM/2.54
// Centimeter to yard: CM/91.44
// Inch to centimeter: Inch * 2.54
// Inch to Yard: Inch/36
// Yard to centimeter: Yard * 91.44
// Yard to inch: Yard * 36

import readline from "readline";

function centimeterToInch(centemeter) {
  return centemeter / 2.54;
}

function centimeterToYard(centimeter) {
  return centimeter / 91.44;
}

function inchToCentimeter(inch) {
  return inch * 2.54;
}

function inchToYard(inch) {
  return inch / 36;
}

function yardToCentimeter(yard) {
  return yard * 91.44;
}

function yardToInch(yard) {
  return yard * 36;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let unitLenghtCheck = 0;
let inputTypeCheck = 0;
let outputTypeCheck = 0;
let totalCheck = "";
let errUnitLenght = "Invalid unit lenght!";
let errInputType = "Invalid input unit type!";
let errOutputType = "Invalit output unit type!";

rl.question(`Input unit lenght? : `, function (lenghtCheck) {
  let lenghtInput = parseFloat(lenghtCheck);
  if (lenghtInput) {
    unitLenghtCheck = 1;
    // console.log(unitLenghtCheck);
  } else {
    unitLenghtCheck = 0;
  }
  rl.question(
    `Input unit type?, C: Centimeter / I: Inch / Y: Yard. : `,
    function (inputCheck) {
      let inputType = inputCheck.trim().toUpperCase();
      if (inputType === "C") {
        inputTypeCheck = 1;
      } else if (inputType === "I") {
        inputTypeCheck = 2;
      } else if (inputType === "Y") {
        inputTypeCheck = 3;
      } else {
        inputTypeCheck = 0;
      }
      // console.log(inputTypeCheck);
      rl.question(
        `Convert to? C: Centimeter / I: Inch / Y: Yard. : `,
        function (outputCheck) {
          let outputType = outputCheck.trim().toUpperCase();
          if (outputType === "C") {
            outputTypeCheck = 1;
          } else if (outputType === `I`) {
            outputTypeCheck = 2;
          } else if (outputType === `Y`) {
            outputTypeCheck = 3;
          } else {
            outputTypeCheck = 0;
          }
          // console.log(outputTypeCheck);
          totalCheck =
            unitLenghtCheck.toString() +
            inputTypeCheck.toString() +
            outputTypeCheck.toString();
          // console.log(totalCheck);
          if (unitLenghtCheck === 0) {
            console.log(errUnitLenght);
          }
          if (inputTypeCheck === 0) {
            console.log(errInputType);
          }
          if (outputTypeCheck === 0) {
            console.log(errOutputType);
          }
          if (
            inputTypeCheck === 1 &&
            outputTypeCheck === 1 &&
            inputType === outputType
          ) {
            console.log(`Same Input & Output type! No need to convert.`);
          }

          let result;
          if (totalCheck === "112") {
            result = centimeterToInch(lenghtInput);
            console.log(`${lenghtInput}Centimeter = ${result.toFixed(2)}Inch`);
          } else if (totalCheck === "113") {
            result = centimeterToYard(lenghtInput);
            console.log(`${lenghtInput}Centimeter = ${result.toFixed(2)}Yard`);
          } else if (totalCheck === "121") {
            result = inchToCentimeter(lenghtInput);
            console.log(`${lenghtInput}Inch = ${result.toFixed(2)}Centimeter`);
          } else if (totalCheck === "123") {
            result = inchToYard(lenghtInput);
            console.log(`${lenghtInput}Inch = ${result.toFixed(2)}Yard`);
          } else if (totalCheck === "131") {
            result = yardToCentimeter(lenghtInput);
            console.log(`${lenghtInput}Yard = ${result.toFixed(2)}Centimeter`);
          } else if (totalCheck === "132") {
            result = yardToInch(lenghtInput);
            console.log(`${lenghtInput}Yard = ${result.toFixed(2)}Inch`);
          }
          rl.close();
        },
      );
    },
  );
});
