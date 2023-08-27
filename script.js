//* --------- Question #1 --------------
// var userNumber = +window.prompt("Enter any number:");
// console.log(userNumber);
//* --------- Question #2 --------------
// var number = +window.prompt("Enter a number to check whether it's divisible by 3 and 4 or not19:");
// if (number % 3 === 0 && number % 4 === 0 && number !== 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
//* --------- Question #3 --------------
// var number1 = +window.prompt("Enter the first number:");
// var number2 = +window.prompt("Enter the second number:");
// if (number1 > number2) {
//   console.log(number1);
// } else {
//   console.log(number2);
// }
//* --------- Question #4 --------------
// var number = +window.prompt("Enter a number:");
// if (number > 0) {
//   console.log("Positive");
// } else if (number < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }
//* --------- Question #5 --------------
// var number1 = +window.prompt("Enter the first number:");
// var number2 = +window.prompt("Enter the second number:");
// var number3 = +window.prompt("Enter the third number:");
// if (number1 > number2 && number1 > number3) {
//   if (number2 > number3) {
//     console.log("Max number: " + number1 + "\n" + "Min number: " + number3);
//   } else {
//     console.log("Max number: " + number1 + "\n" + "Min number: " + number2);
//   }
// } else if (number2 > number3) {
//   console.log("Max number: " + number2 + "\n" + "Min number: " + number1);
// } else {
//   console.log("Max number: " + number3 + "\n" + "Min number: " + number1);
// }
//* --------- Question #6 --------------
// var number = +window.prompt("Enter a number:");
// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }
//* --------- Question #7 --------------
// var character = +window.prompt("Enter a character:");
// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//   console.log("Vowel");
// } else {
//   console.log("Consonant");
// }
//* --------- Question #8 --------------
// var number = +window.prompt("Enter a number:");
// for (var i = 1; i <= number; i++) {
//   console.log(i);
// }
//* --------- Question #9 --------------
// var number = +window.prompt("Enter a number:");
// for (var i = 1; i <= 12; i++) {
//   console.log(i * number);
// }
//* --------- Question #10 --------------
// var number = +window.prompt("Enter a number:");
// for (var i = 1; i <= number; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
//* --------- Question #11 --------------
// var number = +window.prompt("Enter a number:");
// var power = +window.prompt("Enter a power number:");
// console.log(number ** power);
//* --------- Question #12 --------------
// var sub1 = +window.prompt("Enter first subject's mark:");
// var sub2 = +window.prompt("Enter second subject's mark:");
// var sub3 = +window.prompt("Enter third subject's mark:");
// var sub4 = +window.prompt("Enter fourth subject's mark:");
// var sub5 = +window.prompt("Enter fifth subject's mark:");
// var total = sub1 + sub2 + sub3 + sub4 + sub5;
// var average = total / 5;
// var percentage = (total * 100) / 435;
// console.log(
//   "Total marks: " +
//     total +
//     " / " +
//     435 +
//     "\n" +
//     "Average marks: " +
//     average +
//     "\n" +
//     "Percentage: " +
//     percentage +
//     "% / " +
//     "100%"
// );
//* --------- Question #13 --------------
// var month = +window.prompt("Enter the month's number from 1 to 12");
// if (month > 0) {
//   if (month === 2) {
//     console.log("There are 28 days in Feb (and 29 on a leap year).");
//   } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     console.log("There are 31 days in this month.");
//   } else {
//     console.log("There are 30 days in this month.");
//   }
// } else {
//   console.log("Invalid value.");
// }
// * --------- Question #14 --------------
// var physics = +window.prompt("Enter Physics mark:");
// var chemistry = +window.prompt("Enter Chemistry mark:");
// var biology = +window.prompt("Enter Biology mark:");
// var math = +window.prompt("Enter Math mark:");
// var computer = +window.prompt("Enter Computer mark:");
// var total = physics + chemistry + biology + math + computer;
// var percentage = (total * 100) / 500;

// if (percentage >= 90) {
//   console.log("Percentage: " + percentage + "%, Grade: A");
// } else if (percentage >= 80) {
//   console.log("Percentage: " + percentage + "%, Grade: B");
// } else if (percentage >= 70) {
//   console.log("Percentage: " + percentage + "%, Grade: C");
// } else if (percentage >= 60) {
//   console.log("Percentage: " + percentage + "%, Grade: D");
// } else if (percentage >= 40) {
//   console.log("Percentage: " + percentage + "%, Grade: E");
// } else {
//   console.log("Percentage: " + percentage + "%, Grade: F");
// }
//* --------- Question #15 --------------
// var month = +window.prompt("Enter the month's number from 1 to 12");
// switch (true) {
//   case month === 2 && month <= 12:
//     console.log("There are 28 days in Feb (and 29 on a leap year).");
//     break;
//   case month === 1:
//   case month === 3:
//   case month === 5:
//   case month === 7:
//   case month === 8:
//   case month === 10:
//   case month === 12:
//     console.log("There are 31 days in this month.");
//     break;
//   case month === 4:
//   case month === 6:
//   case month === 9:
//   case month === 11:
//     console.log("There are 30 days in this month.");
//     break;
//   default:
//     console.log("Wrong value.");
// }

//* --------- Question #16 --------------
// var character = window.prompt("Enter a character:");
// switch (character) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
// }
//* --------- Question #17 --------------
// var number1 = +window.prompt("Enter the first number:");
// var number2 = +window.prompt("Enter the second number:");
// switch (true) {
//   case number1 > number2:
//     console.log(number1);
//     break;
//   default:
//     console.log(number2);
// }
//* --------- Question #18 --------------
// var number = +window.prompt("Enter a number:");
// switch (true) {
//   case number % 2 === 0 && number !== 0:
//     console.log("Even");
//     break;
//   case number % 2 !== 0 && number !== 0:
//     console.log("Odd");
//     break;
//   default:
//     console.log("Invalid value.");
// }
//* --------- Question #19 --------------
// var number = +window.prompt("Enter a number:");
// switch (true) {
//   case number > 0:
//     console.log("Positive");
//     break;
//   case number < 0:
//     console.log("Negative");
//     break;
//   default:
//     console.log("Zero");
// }
//* --------- Question #20 --------------
// var number1 = +window.prompt("Enter the first number:");
// var number2 = +window.prompt("Enter the second number:");
// var operation = window.prompt("Enter the operator:");
// switch (operation) {
//   case "+":
//     console.log(number1 + number2);
//     break;
//   case "-":
//     console.log(number1 - number2);
//     break;
//   case "*":
//     console.log(number1 * number2);
//     break;
//   case "/":
//     console.log(number1 / number2);
//     break;
//   case "%":
//     console.log(number1 % number2);
//     break;
//   default:
//     console.log("One or more invalid values.");
// }
