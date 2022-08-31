import inquirer from "inquirer";
import array_easy_driver from "./driver_code/array_easy_driver.js";
import array_medium_driver from "./driver_code/array_medium_driver.js";

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "which category of problem to solve?",
      choices: ["array_easy", "array_meduim"],
    },
  ])
  .then((answers) => {
    console.log("Answer:", answers.choice);
    switchcase(answers);
    return;
  });

function switchcase(answers) {
  switch (answers.choice) {
    case "array_easy":
      array_easy_driver();

      break;
    case "array_meduim":
      array_medium_driver();
      break;
    default:
  }
}
