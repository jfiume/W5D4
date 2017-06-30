const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?  `, function (yesOrNo) {
    if (yesOrNo === "yes") {
      return callback(true);
    } else {
      return callback(false);
    }
  });
}


function innerBubbleSort(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }

  askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
    if (isGreaterThan) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      madeAnySwaps = true;
    }
    innerBubbleSort(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  });
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps = true) {
    if (madeAnySwaps) {
      innerBubbleSort(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1, 5, 8, 9], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
