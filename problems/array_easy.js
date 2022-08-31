import inquirer from "inquirer";

export const largest_element_array = () => {
  //2,5,1,3,0
  let arr = [];
  inquirer
    .prompt([
      {
        name: "input",
        message:
          "give an array like [2,5,1,3,0] or press enter to give default array",
        default: [2, 5, 1, 3, 0],
      },
    ])
    .then((answers) => {
      arr = answers.input;
      let largest = arr[0];
      
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > largest) {
          largest = element;
        }
      }
      console.log(`input : ${arr}`);
      console.log(`output : ${largest}`);
      return largest;
    });
};

export const second_largest_element_array = (arr) => {
  console.log(2);
};
