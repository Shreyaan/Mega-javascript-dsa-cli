import inquirer from "inquirer";
import array_easy_driver from "./driver_code/array_easy_driver.js";
import array_medium_driver from "./driver_code/array_medium_driver.js";
// import { second_largest_element_array } from "./problems/array_easy.js";

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: `Hi! welcome.
This is an cli app where you can select any dsa problem, give input and then recive its output.
Which category of problem do you wish to solve?`,
      choices: ["array_easy"],
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
