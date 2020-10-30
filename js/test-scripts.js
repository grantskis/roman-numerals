// TEST IF NUMBER IS USABLE: //
    function usableNumberTest1(number) {
      if (number < 4000) {
        return true;
      } else {
        return false;
      }
    };
    function usableNumberTest2(number) {
      if (number > 0) {
        return true;
      } else {
        return false;
      }
    };
    function usableNumberTest3(number) {
      if (number % 1 === 0) {
        return true;
      } else {
        return false;
      }
    };

// TEST THE NUMBER RANGE //
      function overOneThousand(number) {
        if (number < 1000) {
          return false;
        } else {
          return true;
        }
      };
      function overOneHundred(number) {
        if (number < 100) {
          return false;
        } else {
          return true;
        }
      };
      function overTen(number) {
        if (number < 10) {
          return false;
        } else {
          return true;
        }
      };

// TEST THE REPLACEMENT OF INTEGERS // 
    function savedCode() {
              let outputThousandsPlace = [];
              function addM(number) {
                while 
                (number >= 1000) {
                  outputThousandsPlace.push("M");
                  number -= 1000;
                };
              };
              let outputHundredsPlace = [];
              function addC(number) {
                while 
                (number >= 100) {
                  outputHundredsPlace.push("C");
                  number -= 100;
                };
              };
              let outputTensPlace = [];
              function addX(number) {
                while 
                (number >= 10) {
                  outputTensPlace.push("X");
                  number -= 10;
                };
              };
              let outputOnesPlace = [];
              function addI(number) {
                while 
                (number > 0) {
                  outputOnesPlace.push("I");
                  number --;
                };
              };
    };
// 


let outputThousandsPlace = [];
let outputHundredsPlace = [];
let remainder = []
function addM(number) {
  while 
  (number >= 1000) {
    outputThousandsPlace.push("M");
    number -= 1000;
  };
  (remainder = number);
};

//

let remainder = [];
let chainArray = [];
function addM(number) {
  let outputThousandsPlace = [];
  while 
  (number >= 1000) {
    outputThousandsPlace.push("M");
    number -= 1000;
  };
  (remainder = number);
  chainArray.push(outputThousandsPlace.join(""));
};

function addC(number) {
  let outputHundredsPlace = [];
  while 
  (number >= 100) {
    outputHundredsPlace.push("C");
    number -= 100;
  };
  (remainder = number);
  chainArray.push(outputHundredsPlace.join(""));
};

function addX(number) {
  let outputTensPlace = [];
  while 
  (number >= 10) {
    outputTensPlace.push("X");
    number -= 10;
  };
  (remainder = number);
  chainArray.push(outputTensPlace.join(""));
};

function addI(number) {
  let outputOnesPlace = [];
  while 
  (number > 0) {
    outputOnesPlace.push("I");
    number --;
  };
  (remainder = number);
  chainArray.push(outputOnesPlace.join(""));
};

function allAdds(number) {
  addM(number);
  addC(remainder);
  addX(remainder);
  addI(remainder);
  console.log(chainArray);
};

let iPlace = "IIIIIIIII"
function reduce(value) {
  if (value === "IIIIIIIII") {
    value = "IX"
  }
  else if (value === "IIII") {
    value = "IV"
  }
  else if (value = /I{5}I*/i) {
    value.replace(/I{5}/, "V");
    console.log(value)
  }
  else {
    return false;
    console.log(value)
  };
};

reduce(iPlace);



let iPlace = "IIIIIIII"
iPlace = iPlace.replace(/I{5}/, "V");
console.log(iPlace);


const theVs = /I{5}I*/i;






// REMOVE EMPTY ARRAY VALUES // 
function cleanUp() {
  if (chainArray[0] === "") {
    return false;
  }
  else {
    return true;
  };
};










function fivePlus(element) {
  const check = /I{5}/i;
  if (check.test(element.substring(0))) {
    newElement = element.replace(check, "V")
    console.log(newElement)
  } else {
    return false;
  };
};


let godIDK = false;
const testArray = ["MMMMM", "CCC", "XX", "IIIII"];
testArray.forEach

function tester(input) {
  const allCheck = /I|X|C|M{5}/i;
  if (allCheck.test(input.substring(0))) {
    if (/I{5}/i.test(input.substring(0))) {
    console.log("5 I's");
    godIDK = true;
    } else if (/X{5}/i.test(input.substring(0))) {
      console.log("5 X's");
      godIDK = true;
    } else if (/C{5}/i.test(input.substring(0))) {
      console.log("5 C's");
      godIDK = true;
    } else if (/M{5}/i.test(input.substring(0))) {
      console.log("5 M's");
      godIDK = true;
    };
  } else {
    return false;
  };
};

// check if first five letters are the same
function tester(variable) {
  let c1 = variable.charAt(0);
  let c2 = variable.charAt(1);
  let c3 = variable.charAt(2);
  let c4 = variable.charAt(3);
  let c5 = variable.charAt(4);
  if ( c1 === c2 &&  c3 === c4 && c2 === c5 && c3 === c5 ) {
  return true;
  } else {
  return false; 
  };
  };
  tester("aaaaa")

  const check = /I{5}/i;
  if (check.test(element.substring(0))) {
    newElement = element.replace(check, "V")

function oneToV(element) {
  const iCheck = /I{5}/i;
  element.replace(check, "V");
}


// CHANGE THE VARIABLES!!!
function fivePlus(element, change) {
  const check = /.{5}/i;
  if (check.test(element.substring(0))) {
    element = element.replace(check, change)
  } else {
    return false;
  };
};
fivePlus("")

function findReplace(c1) {
if (c1 === "/i/i") {
  fivePlus("I", "V");
} else if (c1 === "/x/i") {
  fivePlus("X", "L");
}  else if (c1 === "/c/i") {
  fivePlus("C", "D");
} else {
  return false;
};
}





function tenToL()

function hundredToD()





tester("")


const iCheck = /I{5}/i;
const xCheck = /X{5}/i;
const cCheck = /C{5}/i;
const mCheck = /M{5}/i;






fivePlus("IIIIIIII")

function findReplace(element, fives, ones) {
  const checkFive = /fives{5}/i;




  console.log(checkFive);
  console.log(element, fives, ones);
};



//   if (checkFive.test(element.substring(0))) {
//     replaceOne = element.replace(checkFive, ones)
//     console.log(findReplace);
//   } else {
//     return false;
//   };
// };




































function fivePlus(element, change) {
  const check = /.{5}/i;
  if (check.test(element.substring(0))) {
    element = element.replace(check, change)
  } else {
    return false;
  };
};


function tester(variable) {
  let c1 = variable.charAt(0);
  let c2 = variable.charAt(1);
  let c3 = variable.charAt(2);
  let c4 = variable.charAt(3);
  let c5 = variable.charAt(4);
  if ( c1 === c2 &&  c3 === c4 && c2 === c5 && c3 === c5 ) {
    if ( c1 === "I") {
      variable = variable.replace("IIIII", "V");
    } else if ( c1 === "X") {
      variable = variable.replace("XXXXX", "L");
    } else if ( c1 === "C") {
      variable = variable.replace("CCCCC", "D");
    } else {
        console.log("How did you even get this error?")
      }
  } else {
  return false; 
  };
  console.log(variable)
  };
  tester("aaaaa")
  

  function findReplace(c1) {
    if (c1 === "/i/i") {
      fivePlus("I", "V");
    } else if (c1 === "/x/i") {
      fivePlus("X", "L");
    } else if (c1 === "/c/i") {
      fivePlus("C", "D");
    } else {
      return false;
    };
    }
    
    function fivePlus(element, change) {
      const check = /.{5}/i;
      if (check.test(element.substring(0))) {
        element = element.replace(check, change)
      } else {
        return false;
      };
    };



    ////////////////////
    let chainArray = ["MMM", "CCCCC", "XXXXXXXX", "IIIIIIIII"]
chainArray.forEach(function(variable) {
  let c1 = variable.charAt(0);
  let c2 = variable.charAt(1);
  let c3 = variable.charAt(2);
  let c4 = variable.charAt(3);
  let c5 = variable.charAt(4);
  if ( c1 === c2 &&  c3 === c4 && c2 === c5 && c3 === c5 ) {
    if ( c1 === "I") {
      variable = variable.replace("IIIII", "V");
      chainArray[3] = variable
    } else if ( c1 === "X") {
      variable = variable.replace("XXXXX", "L");
      chainArray[2] = variable
    } else if ( c1 === "C") {
      variable = variable.replace("CCCCC", "D");
      chainArray[1] = variable
    } else {
        console.log("How did you even get this error?")
      }
  } else {
  return false; 
  };
  console.log(variable);
  console.log(chainArray);
  });

/////////////