import inquirer from "inquirer";
import {
  largest_element_array,
  second_largest_element_array,
  is_sorted
} from "../problems/array_easy.js";

export default () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "which problem to solve?",
        choices: ["largest_element_array", "second_largest_element_array", "is_sorted"],
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
      case "is_sorted":
        is_sorted();
        break;
      default:
    }
  }
};
