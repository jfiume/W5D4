const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completeCallback) {
  if (numsLeft > 0) {
    reader.question('Input a number!', function (number){
      let increment = parseInt(number);
      sum += increment;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completeCallback);
    });
  } else {
    reader.close();
    return completeCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
