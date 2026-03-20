import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Select unit type you need to covert from? Inch->I, Centimeter->C, Yard->Y : ",
  (unitTypeInput) => {
    let typeInput = unitTypeInput.trim().toUpperCase();
    let typeInputText = "";
    switch (typeInput) {
      case "I":
        typeInputText = "Inch";
        console.log(`You're select ${typeInputText} for convert.`);
        break;
      case "C":
        typeInputText = "Centimeter";
        console.log(`You're select ${typeInputText} for convert.`);
        break;
      case "Y":
        typeInputText = "Yard";
        console.log(`You're select ${typeInputText} for convert.`);
        break;
      default:
        console.log(`Invalid unit type!`);
    }
    rl.question(
      "Select unit type you need to covert to? Inch->I, Centimeter->C, Yard->Y : ",
      (unitTypeOutput) => {
        let typeOutput = unitTypeOutput.trim().toUpperCase();
        let typeOutputText = "";
        switch (typeOutput) {
          case "I":
            typeOutputText = "Inch";
            console.log(`Convert from ${typeInputText} to ${typeOutputText}.`);
            break;
          case "C":
            typeOutputText = "Centimeter";
            console.log(`Convert from ${typeInputText} to ${typeOutputText}.`);
            break;
          case "Y":
            console.log(`Convert from ${typeInputText} to ${typeOutputText}.`);
            break;
          default:
            console.log(`Invalid unit type! Program will close.`);
            rl.close();
        }
        if (unitTypeInput === unitTypeOutput) {
          console.log(`Same unit type! No need to convert.`);
          rl.close();
        } else {
          console.log(`Correct.`);
        }
      },
    );
  },
);
