import inquirer from "inquirer";
import {
  largest_element_array,
  second_largest_element_array,
} from "../problems/array_medium.js";

export default () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "which problem to solve?",
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
};
