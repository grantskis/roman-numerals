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

