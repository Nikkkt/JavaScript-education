let age = prompt("Enter your age");
age = parseInt(age);

if (isNaN(age) || age < 0) alert("Error. Invalid input");
else {
    if (age >= 0 && age < 12) alert("You are child");
    else if (age >= 12 && age < 18) alert("You are teenager");
    else if (age >= 18 && age < 60) alert("You are adult");
    else alert("You are so old");
}


let year = prompt("Enter a year");
year = parseInt(year);

if (isNaN(year) || year <= 0) alert("Error. Invalid input");
else {
    let isLeapYear = false;

    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) isLeapYear = true;

    if (isLeapYear) alert(`${year} is a leap year.`);
    else alert(`${year} is not a leap year.`);
}


let amount = prompt("Enter amount of USD");
amount = parseFloat(amount);

if (isNaN(amount) || amount <= 0) alert("Error. Invalid input");
else {
    let currency = prompt("Enter currency (EUR, UAH, AZN)").toUpperCase();

    const exchange = {
        EUR: 0.93,
        UAH: 40.5,
        AZN: 1.7
    };

    if (exchange[currency] !== undefined) {
        let convertedAmount = amount * exchange[currency];
        alert(`${amount} USD = ${convertedAmount} ${currency}.`);
    } 
    else alert("Invalid currency");
}