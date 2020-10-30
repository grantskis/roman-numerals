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
  chainArray = [];
  addM(number);
  addC(remainder);
  addX(remainder);
  addI(remainder);
  
  chainArray.forEach(function(variable) {
    let digit1 = variable.charAt(0);
    let digit2 = variable.charAt(1);
    let digit3 = variable.charAt(2);
    let digit4 = variable.charAt(3);
    if ( digit1 === digit2 &&  digit3 === digit4 && digit2 === digit4 ) {
      if ( digit1 === "I") {
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
      } else if ( digit1 === "X") {
        if (variable === "XXXXXXXXX") {
          variable = "XC";
        } else if (variable === "XXXX") {
          variable = "XL";
        } else {
          variable = variable.replace(/X{5}/, "L");
      }
        chainArray[2] = variable;
      } else if ( digit1 === "C") {
        if (variable === "CCCCCCCCC") {
          variable = "CM";
        } else if (variable === "CCCC") {
          variable = "CD";
        } else {
          variable = variable.replace("CCCCC", "D");
        };
        chainArray[1] = variable;
      } else {
        return false;
        }
    } else {
      return false;
    };
    });
    finalChain = "";
    chainArray.forEach(function(linkOfChain) {
    finalChain = finalChain.concat(linkOfChain);
  });
  };

function usableNumber(number) {
  if (number >= 4000) {
    finalChain = "This number is too big!";
  } else if (number <= 0) {
    finalChain = "This number is too small!";
  } else {
    allAdds(number);
  }
};
// 

// USER LOGIC... LMAO
$(document).ready(function() {
  $("form#box").submit(function(event) {
    const arabicNumerals = parseInt($("input#numbers").val());
    usableNumber(arabicNumerals);
    const outputFinal = finalChain;
    $("#romanNumerals").text(outputFinal);
    $("#output").show();
    event.preventDefault();
  });
});