// BUSINESS LOGIC........ LMAO
let remainder = [];
let chainArray = [];
let finalChain = "";
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

  chainArray.forEach(function(variable) {
    let c1 = variable.charAt(0);
    let c2 = variable.charAt(1);
    let c3 = variable.charAt(2);
    let c4 = variable.charAt(3);
    let c5 = variable.charAt(4);
    if ( c1 === c2 &&  c3 === c4 && c2 === c5 && c3 === c5 ) {
      if ( c1 === "I") {
        if (variable === "IIIIIIIII") {
          variable = "IX"
        }
        else if (variable === "IIII") {
          variable = "IV"
        }
        else {
          variable = variable.replace(/I{5}/, "V");
        }
        chainArray[3] = variable;
      } else if ( c1 === "X") {
        if (variable === "XXXXXXXXX") {
          variable = "XC";
        } else if (variable === "XXXX") {
          variable = "XL";
        } else {
          variable = variable.replace(/X{5}/, "L");
      }
        chainArray[2] = variable;
      } else if ( c1 === "C") {
        if (variable === "CCCCCCCCC") {
          variable = "CM";
        } else if (variable === "CCCC") {
          variable = "CD";
        } else {
          variable = variable.replace("CCCCC", "D");
        };
        chainArray[1] = variable;
      } else {
          console.log("How did you even get this error?")
        }
    } else {
    return false; 
    };
    });
  chainArray.forEach(function(linkOfChain) {
    finalChain = finalChain.concat(linkOfChain);
  });
  console.log(finalChain)
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
// 

// USER LOGIC... LMAO
$(document).ready(function() {
  $(#number-box).submit(function(event) {
    event.preventDefault();
    const arabicNumerals = $("input#numbers").val();
    usableNumber(arabicNumerals);
    $(".romanNumerals").text(finalChain);
    $(".output").show();
  });
});





usableNumber()

