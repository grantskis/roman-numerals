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

// 

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



let outputOnesPlace = [];
function addI(number) {
  while 
  (number > 0) {
    outputOnesPlace.push("I");
    number --;
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

let outputHundredsPlace = [];
function addC(number) {
  while 
  (number >= 100) {
    outputHundredsPlace.push("C");
    number -= 100;
  };
};

let outputThousandsPlace = [];
function addM(number) {
  while 
  (number >= 1000) {
    outputThousandsPlace.push("M");
    number -= 1000;
  };
};
console.log(outputThousandsPlace);

addX(30);
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

let outputThousandsPlace = [];
let outputHundredsPlace = [];
let outputTensPlace = [];
let outputOnesPlace = [];
let remainder = [];
let mPlace = [];
let cPlace = [];
let xPlace = [];
let iPlace = [];
function addM(number) {
  while 
  (number >= 1000) {
    outputThousandsPlace.push("M");
    number -= 1000;
  };
  (remainder = number);
  mPlace = outputThousandsPlace.join("");
};

function addC(number) {
  while 
  (number >= 100) {
    outputHundredsPlace.push("C");
    number -= 100;
  };
  (remainder = number);
  cPlace = outputHundredsPlace.join("");
};

function addX(number) {
  while 
  (number >= 10) {
    outputTensPlace.push("X");
    number -= 10;
  };
  (remainder = number);
  xPlace = outputTensPlace.join("");
};

function addI(number) {
  while 
  (number > 0) {
    outputOnesPlace.push("I");
    number --;
  };
  (remainder = number);
  iPlace = outputOnesPlace.join("");
};
addM(3514);
addC(remainder);
addX(remainder);
addI(remainder);
console.log(remainder);
console.log(mPlace);
console.log(cPlace);
console.log(xPlace);
console.log(iPlace);

let iPlace = "IIIIIIIII"
function reduce(value) {
if (value === "IIIIIIIII") {
return true;
}
else {
return false;
};
};

reduce(iPlace);