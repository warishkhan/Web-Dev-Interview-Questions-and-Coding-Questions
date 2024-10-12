function rightAngledTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i));
  }
}

//   rightAngledTriangle(5);

// *
// * *
// * * *
// * * * *
// * * * * *

// Manually

function printAsteriskPattern(lines) {
  for (let i = 1; i <= lines; i++) {
    let result = "";

    // Inner loop to append the asterisks
    for (let j = 0; j < i; j++) {
      result += i;
    }

    // Print the result for the current line
    console.log(result.trim());
  }
}

// Example usage
//   printAsteriskPattern(5);

/*
1
22
333
4444
55555

*/

// 2. Square Pattern

function squarePattern(n) {
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(n));
  }
}

//   squarePattern(5);

//   *****
//   *****
//   *****
//   *****
//   *****

function ManuallySquarePattern(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
      result += "*";
    }
    console.log(result);
  }
}

// ManuallySquarePattern(5)

// 3. Hollow Square Pattern

function hollowSquarePattern(n) {
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      console.log("*".repeat(n));
    } else {
      console.log("*" + " ".repeat(n - 2) + "*");
    }
  }
}

//   hollowSquarePattern(5);

// *****
// *   *
// *   *
// *   *
// *****

function manuallyHollowSquare(n) {
  for (let i = 0; i < n; i++) {
    let result = "";

    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        result += "*";
      } else if (j === 0 || j === n - 1) {
        result += "*";
      } else {
        result += " ";
      }
    }

    console.log(result);
  }
}

// manuallyHollowSquare(5);

// 4. Inverted Triangle Pattern

function invertedTrianglePattern(n) {
  for (let i = n; i > 0; i--) {
    console.log("*".repeat(i));
  }
}

//   invertedTrianglePattern(5);

// *****
// ****
// ***
// **
// *

function manuallyInvertedRightTriangle(n) {
  for (let i = n; i > 0; i--) {
    let result = "";
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    console.log(result);
  }
}

// manuallyInvertedRightTriangle(5)

// 5. Pyramid Pattern

function pyramidPattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

//   pyramidPattern(5);

//     *
//    ***
//   *****
//  *******
// *********

function printPyramidPattern(lines) {
    // Calculate the total width of the pyramid base
    const totalWidth = 2 * lines - 1;
  
    for (let i = 0; i < lines; i++) {
      let result = '';
  
      // Calculate the number of spaces and asterisks for the current line
      const numAsterisks = 2 * i + 1;
      const numSpaces = (totalWidth - numAsterisks) / 2;
  
      // Append spaces
      for (let j = 0; j < numSpaces; j++) {
        result += ' ';
      }
  
      // Append asterisks
      for (let j = 0; j < numAsterisks; j++) {
        result += '*';
      }
  
      // Append spaces (not necessary, but for completeness)
      for (let j = 0; j < numSpaces; j++) {
        result += ' ';
      }
  
      // Print the current line
      console.log(result);
    }
  }
  
  // Example usage
  // printPyramidPattern(5);


  // 6. Inverted Pyramid Pattern

  function invertedPyramidPattern(n) {
    for (let i = n; i > 0; i--) {
      console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
  }
  
  // invertedPyramidPattern(5);


  function manuallyInvertedPyramid(n){
    let totalWidth = 2*n-1;
    for (let i = n; i > 0; i--) {
      let result = '';
  
      // Calculate the number of spaces and asterisks for the current line
      const numAsterisks = 2 * i - 1;
      const numSpaces = (totalWidth - numAsterisks) / 2;
  
      // Append spaces
      for (let j = 0; j < numSpaces; j++) {
        result += ' ';
      }
  
      // Append asterisks
      for (let j = 0; j < numAsterisks; j++) {
        result += '*';
      }
  
      // Append spaces (not necessary, but for completeness)
      for (let j = 0; j < numSpaces; j++) {
        result += ' ';
      }
  
      // Print the current line
      console.log(result);
    }
  }

  // manuallyInvertedPyramid(5)

  // 7. Diamond Pattern

  function diamondPattern(n) {
    for (let i = 1; i <= n; i++) {
      console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
    for (let i = n - 1; i > 0; i--) {
      console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
  }
  
  // diamondPattern(5);


  // 8. Hollow Diamond Pattern

  function hollowDiamondPattern(n) {
    for (let i = 1; i <= n; i++) {
      if (i === 1) {
        console.log(' '.repeat(n - i) + '*');
      } else {
        console.log(' '.repeat(n - i) + '*' + ' '.repeat(2 * i - 3) + '*');
      }
    }
    // for (let i = n - 1; i > 0; i--) {
    //   if (i === 1) {
    //     console.log(' '.repeat(n - i) + '*');
    //   } else {
    //     console.log(' '.repeat(n - i) + '*' + ' '.repeat(2 * i - 3) + '*');
    //   }
    // }
  }
  
  hollowDiamondPattern(5);
  
  
  
  
