# _Number Converter: Roman Numerals_ #

### _An HTML website using jQuery, bootstrap, and custom JavaScript and CSS, October 29th, 2020_

#### (For when you want to figure out which Superbowl will be playing in 3535 AD)

## Description

A simple-seeming webpage -- still a work in progress! -- meant to allow the user to convert modern Arabic numerals (your familiar 1-9) to their Roman numeral counterparts (your less-familiar I-IX).

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
  - Convert character strings that exceed notation standards to their proper shorthand. For example, "70" could be written as 7 X's ("XXXXXXX"), but proper notation is actually "LXX."
  - Correctly abbreviate the number as much as possible, and output the final total for the user to see. ("4" to "IIII" to "IV.")

## Known Issues / Bugs
- Currently not styled on the front end, dummy placeholder text is still in place.

### Setup
To view live on the web, please visit [this GitHub.io page](grantskis.github.io/roman-numerals)

To view locally on your machine, please:
- Find the green **Code** button above the file list on this project's [main GitHub repository page](https://github.com/grantskis/roman-numerals.git).
- Select the button to open a drop-down menu. Select "Open with GitHub Desktop" or, if you do not have this program installed, download the compressed .zip file.
- Extract the .zip file to your local machine.
- Use your browser of choice to launch _index.html_.
- Directions were accurate as of Oct. 29, 2020. If GitHub has since changed their web UI, please see [the GitHub help docs](https://docs.github.com/en) for up-to-date information.

To clone this project to your machine, please:
- Launch your terminal of choice. The following directions are based on Git Bash for a Windows machine; you may have to adjust terminology based on your local specs.
- Navigate to the containing directory you would like to clone this project.
- Input:
> $ git clone https://github.com/grantskis/roman-numerals
- This will clone the project to a folder called "roman-numerals." If you wish to clone it into a directory of a different name, append the new folder name to the end of the string, like so:
> https://github.com/grantskis/roman-numerals NEW-FOLDER




  ## Projected Code // Test Specifications:

  _Intention: verify number can be used for converter._
  Describe: usableNumber()
  Test: "It returns false for numbers greater than or equal to 4,000."
  Expect: (usableNumber(4001)).toEqual(false);

  Test: "It returns false for numbers less than or equal to 0."
  Expect: (usableNumber(-5))toEqual(false);

  Test: "It returns false for mixed numbers or fractions."
  Expect: (usableNumber(3.75))toEqual(false);
  Reality: "It discards all decimal value and rounds down."

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

_Intention: push corresponding variable to array for every value of 1n._
  Describe: addI()
  Test: "It returns a string with as many I's as number input."
  Expect:(addI(7).toEqual("IIIIIII");

  Repeat test for 10 -> X, 100 -> C, and 1000 -> M.

  _Intention: push remainder to subsequent function._
  Test: "It saves the remaining number < _1n_ to be used in the next equation.
  Expect: // code for loop using number -= _1n_ // }; (remainder = number);

_Intention: reduce "XXXXXXXXX" to proper Roman numeral notation in as few steps as possible._
Test: "It converts exact value "XXXXXXXXX" (9 X's) to "XC" (90)."
Code: if (outputTensPlace === "XXXXXXXXX") {outputTensPlace = "XC"}, else..

Test: "It converts exact value XXXX (4 X's) to XL (40)."
Code: if (outputTensPlace === "XXXX") {outputTensPlace = "XL"}, else..

Test: "It converts initial string XXXXX (5 X's) to L (50)."
Code: if (outputTensPlace === "XXXXX") {outputTensPlace = "L"}

## Technologies Used
- Website, CSS, and JavaScript coded in Visual Studio Code. 
- JavaScript testing, breaking, and retesting conducted in [jsconsole](https://jsconsole.com/).

### License
- _GNU AGPLv3_
- Project copyright (c) 2020 **_Shannon Grantski_**
- Project goal quoted text copyright (c) 2020 Epicodus, Inc