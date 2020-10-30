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

chainArray.forEach(function(variable) {
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
  console.log(variable);
  console.log(chainArray);
  });




function usableNumber(number) {
  if (number >= 4000) {
    return false;
  } else if (number < 0) {
    return false;
  } else if (number % 1 !== 0) {
    return false;
  } else {
    allAdds(number);
  }
};

usableNumber()