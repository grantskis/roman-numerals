_This project is not currently in presentation format. Please come back later._

## Project Goal:

As taken from the [Epicodus program's cirriculum](https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-roman-numerals):

> Write a method to convert numbers into Roman numerals. Roman numerals are based on seven symbols:
> 
> Symbol  Value
> I       1
> V       5
> X       10
> L       50
> C       100
> D       500
> M       1,000
  > The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.> 
  > 
  > The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.> 
  > 
  > You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

  ## Project Parameters:
  - Return values only for whole numbers greater than 0. The Roman numeral system does not have a value for zero, nor does it have a number-value notation for fractions or decimals.
  - Cap upper range of values at 3,999. Although Roman numerals can be used for numbers in excess of 100,000, values that would need to utilize [macron-modified characters](https://en.wiktionary.org/wiki/macron#Noun), such as 4,500, are outside the scope of this project.

  ## Project Trajectory:
  - Identify the value of user-inputed number
  - Make replacements to individual integers based on their position within that number. For example, the number "70" has a "7" in the "tens place," and must be rendered with characters that correspond to that range of value.
  - Convert character strings that exceed notation standards to their proper shorthand. For example, "70" could be written as 7 X's (XXXXXXX), but proper notation is actually LXX.
  - Abbreviate the number as much as possible, and output the final total for the user to see.

  ## Projected Code // Test Specifications:

  _Intention: verify number can be used for converter._
  Describe: usableNumber()
  Test: "It returns false for numbers greater than or equal to 4,000."
  Expect(usableNumber(4001)).toEqual(false);

  Test: "It returns false for numbers less than or equal to 0."
  Expect(usableNumber(-5))toEqual(false);

  Test: "It returns false for mixed numbers or fractions."
  Expect(usableNumber(3.75))toEqual(false);

_Intention: verify and prepare number for modification in the thousands place_
  Describe: overOneThousand()
  Test: "It returns true for numbers greater than or equal to 1,000."
  Expect:(overOneThousand(3500)).toEqual(true);

  Test: "It returns false for numbers less than 1000."
  Expect:(overOneThousand(500)).toEqual(false);

_Intention: verify and prepare number for modification in the hundreds place_
  Describe: overOneHundred()
  Test: "It returns true for numbers greater than or equal to 100."
  Expect:(overOneHundred(300)).toEqual(true);

  Test: "It returns false for numbers less than 100."
  Expect:(overOneHundred(40)).toEqual(false);

_Intention: verify and prepare number for modification in the tens place_
  Describe: overTen()
  Test: "It returns true for numbers greater than or equal to 10."
  Expect:(overTen(45)).toEqual(true);

  Test: "It returns false for numbers less than 10."
  Expect:(overTen(3)).toEqual(false);


