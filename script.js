// Dit is een functie die iets produceert of berekend.
const checkBiggerThan100 = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(checkBiggerThan100(101));


// Dit is een functie die iets produceert of berekend.
const bouncer = function(maxNumber, actualNumber, age) {
    if (age < 18) {
        return "This is a club for adults.";
    } else if (actualNumber <= maxNumber) {
        return "Come in!"
    } else {
        return "It's too busy now, come back later."
    }
}

console.log(bouncer(100, 101, 19));


// Dit is een functie die iets produceert of berekend.
const calculateAverage = function(nr1, nr2, nr3, nr4, nr5) {
    let total = nr1 + nr2 + nr3 + nr4 + nr5;
    let average = total / 5;
    return Math.round(average);
}

console.log(calculateAverage(321, 344, 345, 549, 435));