// 1. Adition (+)
function getSum(num1, num2); {
    var result = num1 + num2;
    return result;
}

var resultSum = getsum(1, 2);
console.log('should be 3:', resultSum);

//example-operator(+)
var sum = 3 + 4;
console.log('sum:', sum);
//example-variables whose values are numbers
var numberOfApples = 3;
var numberOfBananas = 4;
var totalFruit = numberOfApples + numberOfBananas;
console.log('totalFruit:', totalFruit);


// 2. Subtraction (-)
function getDifference(num1, num2); {
    var result = num1 - num2;
    return result;
}

var resultDiff = getDifference(30, 10);
console.log('should be 20:', resultDiff);

//example-operator(-)
var difference = 12 - 4;
console.log('difference:', difference);
//example-variables whose values are numbers
var numberOfApplesInitially = 12;
var numberOfApplesSold = 4;
var numberOfApplesRemaining = numberOfApplesInitially - numberOfApplesSold;
console.log('numberofApplesRemaining:', numberOfApplesRemaining);


// 3. Multiplication (*)
function getProduct(num1, num2) {
    var result = num1 * num2;
    return result;
}

var resultProduct = getProduct(3, 4);
console.log('resultProduct:', resultProduct);
    
//example-operator(*)
var product = 7 * 4;
console.log('product:', product);
//example-variables whose values are numbers
var numberOfStores = 7;
var numberOfEmployeesPerStore = 4;
var numberOfTotalEmployees = numberOfStores * numberOfEmployeesPerStore;
console.log('numberOfTotalEmployees:', numberOfTotalEmployees);


// 4. Division (/)
function getQuotient(num1, num2); {
    var result = num1 / num2;
    return result;
}

var resultQuotient = getQuotient(12, 3);
console.log('resultQuotient:', resultQuotient);

//example-operator(/)
var quotient = 24 / 6;
console.log('quotient:', quotient);
//example-variables whose values are numbers
var slicesOfPizza = 24;
var numberOfPeople = 6;
var slicesPerPerson = slicesOfPizza / numberOfPeople;
console.log('slicesPerPerson:', slicesPerPerson);


// 5. Exponent (**)
function getPower(num1, num2) {
    var result = num1 ** num2;
    return result;
}

var resultPower = getPower(2, 3);
console.log('resultPower', resultPower);

//example-operator(**)
var power = 2 ** 5;
console.log('power:', power);
//example-variables whose values are numbers
var choicesPerCategory = 2;
var numberOfCategories = 5;
var totalNumberOfChoices = choicesPerCategory ** numberOfCategories;
console.log("totalNumberOfChoices:", totalNumberOfChoices);


// 6. Modulo (%)
function getRemainder(num1, num2) {
    var result = num1 % num2;
    return result;
}

var resultRemainder = getRemainder(4, 3);
console.log('resultRemainder:', resultRemainder);

//example-operator(%)
var remainder = 11 % 2;
console.log('remainder:', remainder);
//example-variables whose values are numbers
var numberOfSocks = 11;
var numberOfSocksPerPerson = 2;
var numberOfSocksRemaining = numberOfSocks % numberOfSocksPerPerson;
console.log('numberOfSocksRemaining', numberOfSocksRemaining);


// 7. Plus-Equals (+=); Increment
function increment(base, incrementer); {
    var result = base += increment;
    return result;
}

var resultIncrement = increment(3, 4);
console.log('resultIncrement:', resultIncrement);

//example-operator(+=)
var increment = 11;
increment += 2;
console.log('increment:', increment);
//example-variables whose values are numbers
var totalUnitsOfCargo = 11;
var additionalUnits = 2;
totalUnitsOfCargo += additionalUnits;
console.log('totalUnitsOfCargo:', totalUnitsOfCargo);


// 8. Minus-equals (-=); Decrement
function decrement(base, decrementer) {
    var result = base -= decrementer;
    return result;
}

var resultDecrement = decrement(6, 4);
console.log('resultDecrement:', resultDecrement);

//example-operator(-=)
var decrement = 13;
decrement -= 3;
console.log('decrement', decrement);
//example-variables whose values are numbers
var totalUnitsAvailable = 13;
var unitsSold = 3;
totalUnitsAvailable -= unitsSold;
console.log('totalUnitsAvailable:', totalUnitsAvailable);


// 9. Times-equals (*=)
function applyTimesEquals(num1, num2) {
    var result = num1 *= num2;
    return result;
}

var resultTimesEquals = applyTimesEquals(2, 7);
console.log('resultTimesEquals:', resultTimesEquals);

//example-operator(*=)
var result = 10;
result *= 4;
console.log('result:', result);
//example-variables whose values are numbers
var currentProduct = 10;
var multiplier = 4;
currentProduct *= multiplier;
console.log('should be 40:', currentProduct);


// 10. Divide-equals (/=)
function applyDivideEquals(num1, num2) {
    var result = num1 /= num2;
    return result;
}

var resultDivideEquals = applyDivideEquals (56, 7);
console.log('resultDivideEquals:', resultDivideEquals);

//example-operator(/=)
var result = 55;
result /=5;
console.log('result:', result);
//example-variables whose values are numbers
var currentQuotient = 55;
var divider = 5;
currentQuotient /= divider;
console.log('should be 11:', currentQuotient);


// 11. Absolute Value (Math.abs())
function getAbsoluteValue(num); {
    var result = Math.abs(num);
    return result;
}

var result1 = getAbsoluteValue(-56);
console.log('should be 56:', getAbsoluteValue);
var result2 = getAbsoluteValue(127);
console.log('should be 127:', getAbsoluteValue);

//example-operator(Math.abs())
var original = -295;
console.log('absolute value applied:', Math.abs(original));
//example-variables whose values are numbers
var position1 = 5;
var position2 = 300;
var difference = position1 - position2;
var magnitudeDifference = Math.abs(difference);
console.log('magnitudeDifference:', magnitudeDifference);


// 12. Rounding up and down (Math.ceil(), Math.floor())
function roundUp(num); {
    var result = Math.ceil(num);
    return result;
}
var resultroundUp = roundUp(12.9);
console.log('resultroundUp:', resultroundUp);


function roundDown(num); {
    var result = Math.floor(num);
    return result;
}
var resultroundDown = roundDown(12.9);
console.log('resultroudnDown:', resultroundDown)


//example-operator(Math.ceil(), Math.floor())
var original = 13.7;
console.log('rounded up:', Math.ceil(original));
console.log('rouned down:', Math.floor(original));
//example-variables whose values are numbers
var score = 89.4
var gradeFromNiceTeacher = Math.ceil(score);
var gradeFromMeanTeacher = Math.floor(score);
console.log('gradeFromNiceTeacher:', gradeFromNiceTeacher);
console.log('gradeFromMeanTeacher:', gradeFromMeanTeacher); 


// 13. Parsing Integer/Float from String (Number.parseInt(), Number.floatInt())
function applyParseInt(num) {
    var result = Number.parseInt(num);
    return result;
}

var resultParseInt = applyParseInt("23");
console.log('resultParseInt:', resultParseInt);

function applyParseFloat(num) {
    var result = Number.parseFloat(num);
    return result;
}

var resultFloatInt = applyParseFloat("101.78");
console.log('resultFloatInt:', resultFloatInt);

//example-operator(Number.parseInt(), Number.floatInt())
var ParsedInteger = Number.parseInt("49");
console.log('ParsedInteger:', ParsedInteger);
var FloatInteger = Number.parseFloat("29.45");
console.log('FloatInteger:', FloatInteger)

//example-variables whose values are string versions of numbers
var userIdString = "49";
var parsedUserId = Number.parseInt("49");
console.log("parsedUserId:", parsedUserId);
var userIdFloat = "29.45";
var FloatUserId = Number.parseFloat("29.45");
console.log("FloatUserId:", FloatUserId);


// 14. Random number (Math.random())
// Math.random() will generate a number between 0 and 1; The number generated can be 0, but will not be 1

function generateRandomNumber(min, max) {
    var result = Math.random() * (max - min) + min;
    return result;
}

var resultRandomNumber = generateRandomNumber(1, 10);
console.log('resultRandomNumber:', resultRandomNumber);

//example-random number between two specific values
var randomBetween1And10 = Math.random() * (10 - 1) + 1;
console.log('randomBetween1And10:', randomBetween1And10);
//example-variables whose values are numbers
var min = 90;
var max = 100;
var randomBetween90And100 = Math.random() * (max - min) + min;
console.log('randomBetween90And100:', randomBetween90And100);


// 15. Greater than (>) and Greater than or equal to (>=)
function applyGreaterThan(num1, num2); {
    var result = num1 > num2;
    return result;
}

var trueGreaterThanResult = applyGreaterThan(101, 10);
console.log('should be true:', trueGreaterThanResult);
var falseGreaterThanResult = applyGreaterThan(-13, 2);
console.log('should be false:', falseGreaterThanResult);

//example-operator(>, >=)
var exclusiveLowerBound = 7;
console.log('actual is greater than lower bound:', 9 > exclusiveLowerBound);
var inclusiveLowerBound = 5;
console.log('actual is greater than or equal to inclusive lower bound:', 5 >= inclusiveLowerBound);
//example-variables whose values are numbers
var numberOfEnvelopesPurchased = 430;
var numberofEnvelopesNeeded = 350;
var acquiredSufficientEnvelopes = numberOfEnvelopesPurchased >= numberofEnvelopesNeeded;
console.log("acquiredSufficientEnvelopes:", acquiredSufficientEnvelopes);


// 16. Less than (<) and Less than or equal to (<=)
function applyLessThanOrEqualTo(num1, num2); {
    var result = num1 <= num2;
    return result;
}

var trueLessThanOrEqualToResult = applyLessThanOrEqualTo(11, 110);
console.log('should be true:', trueLessThanOrEqualToResult);
var falseLessThanOrEqualToResult = applyLessThanOrEqualTo(-13, -21);
console.log('should be false:', falseLessThanOrEqualTo);

//example-operator(<, <=)
var exclusiveUpperBound = 17;
console.log('actual is less than exclusive upper bound:', 9 < exclusiveUpperBound);
var inclusiveUpperBound = 51;
console.log('actual is less than or equal to inclusive upper bound:', 51 <= inclusiveUpperBound);
//example-variables whose values are numbers
var fuelNeeded = 27;
var fuelCapacity = 30;
var canMakeTripWithoutStopping = fuelNeeded <= fuelCapacity;
console.log('canMakeTripWithoutStopping:', canMakeTripWithoutStopping);
