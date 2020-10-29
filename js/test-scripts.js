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
    function redactedCode() {
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


console.log(outputHundredsPlace);
let output = outputHundredsPlace.join("");
console.log(output);

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
function addM(number) {
  let outputThousandsPlace = [];
  while 
  (number >= 1000) {
    outputThousandsPlace.push("M");
    number -= 1000;
  };
  (remainder = number);
  mchainArray.push(outputThousandsPlace.join(""));
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
addM(3514);
addC(remainder);
addX(remainder);
addI(remainder);
console.log(remainder, mPlace, cPlace, xPlace, iPlace);

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