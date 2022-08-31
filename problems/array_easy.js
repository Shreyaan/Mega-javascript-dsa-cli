import inquirer from "inquirer";
export const largest_element_array = () => {
  let arr = [];
  inquirer
    .prompt([
      {
        name: "input",
        message: `Problem Statement: Given an array, we have to find the largest element in the array. 

Give an array like 2,5,1,3,0 or press enter to give default array`,
        default: [2, 5, 1, 3, 0],
      },
    ])
    .then((answers) => {
      parseinput(answers);
      arr = parseinput(answers);
      let largest = arr[0];

      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > largest) {
          largest = element;
        }
      }
      console.log(`input : ${arr}`);
      console.log(`output : largest number of the array is ${largest}`);
      return largest;
    });
};

export const second_largest_element_array = () => {
  let arr = [];
  inquirer
    .prompt([
      {
        name: "input",
        message: `Problem Statement: Given an array, find the second smallest and second largest element in the array. 

Give an array like 2,5,1,3,0 or press enter to give default array`,
        default: [11, 23, 12, 323, 424, 43, 213, 1, 0, 31, 3, 4, 13, 5],
      },
    ])
    .then((answers) => {
      code(parseinput(answers));
    });

  function code(input) {
    arr = input;
    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element > largest) {
        largest = element;
      }
      if (element < smallest) {
        smallest = element;
      }
    }

    let second_largest = smallest;
    let second_smallest = largest;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element < largest && element > second_largest) {
        second_largest = element;
      }
      if (element > smallest && element < second_smallest) {
        second_smallest = element;
      }
    }

    console.log(`input : ${arr}`);
    console.log(
      `output : second largest - ${second_largest} and second smallest - ${second_smallest}`
    );
    return largest;
  }
};
export const is_sorted = () => {
  let arr = [];
  inquirer
    .prompt([
      {
        name: "input",
        message: `Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False. 

Give an array like 2,5,1,3,0 or press enter to give default array`,
        default: [3,4,5,1,2],
      },
    ])
    .then((answers) => {
      code(parseinput(answers));
    });

  function code(input) {
   let nums = input;
    let number=1, double=[...nums, ...nums];
    
    for(let i=0; i<double.length; i++){
		if(double[i]<=double[i+1]){
            if(++number>=nums.length){ console.log (true) 
              return true};
        }else{
            number=1;
        }
    }
    console.log(false)
    return false;
  }
};


function parseinput(answers) {
  let input;
  input = answers.input;
  if (typeof input === "string" || input instanceof String)
    input = input.split(",");
  input = input.map(Number);
  return input;
}
