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

