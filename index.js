import inquirer from "inquirer";
import {
  largest_element_array,
  second_largest_element_array,
} from "./array_easy.js";

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "which code to run?",
      choices: ["largest_element_array", "second_largest_element_array"],
    },
  ])
  .then((answers) => {
    console.log("Answer:", answers.choice);

    
    switchcase(answers);

    return;
  });

function switchcase(answers) {
  switch (answers.choice) {
    case "largest_element_array":

      largest_element_array();

      break;
    case "second_largest_element_array":
      second_largest_element_array();
      break;
    default:
  }
}
