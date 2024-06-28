let username = prompt("Enter your name");
console.log(`Hello, ${username}!`);


const currentYear = 2024;
let birthYear = Number(prompt("Enter your birth year"));
let age = currentYear - birthYear;
console.log(`You are ${age} years old`);


let money = Number(prompt("Enter amount of money"));
let chocolatePrice = Number(prompt("Enter price of a chocolate"));
let chocolateAmount = Math.floor(money / chocolatePrice);
let change = money % chocolatePrice;
console.log(`You can buy ${chocolateAmount} bars\nYour change is ${change}`);