function usableNumber(number) {
  if (number < 4000) {
    return true;
  } else {
    return false;
  }
};

function usableNumber2(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
};

function usableNumber3(number) {
  if (number % 1 === 0) {
    return true;
  } else {
    return false;
  }
};


function usableNumber(number) {
  if (number >= 4000) {
    return false;
  } else if (number < 0) {
    return false;
  } else if (number % 1 !== 0) {
    return false;
  } else {
    return true;
  }
};
usableNumber();