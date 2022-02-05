// 1. Not(!)
function opposite(boolean) {
    return !boolean;
}

var outputTrue = opposite(false);
console.log('should be true:', outputTrue);

var outputFalse = opposite(true);
console.log('should be false:', outputFalse);
//example
var sense = true;
var nonsense = !sense;
console.log('nonsense:', nonsense);

var nonNonsense = !nonsense;
console.log('not nonsense:', nonNonsense);


// 2. Or(||)
function eitherAreTrue(bool_1, bool_2); {
    var result = bool_1 || bool_2;
    return result;
}

var outputTrue = eitherAreTrue(true, false);
console.log('should be true:', outputTrue);

var outputFalse = eitherAreTrue(false, false);
console.log('should be false:', outputFalse);
//example
var haveACar = true;
var bussesAreRunning = true;
var willAttendEvent = haveACar || bussesAreRunning;
console.log('I will attend the event', willAttendEvent);


// 3. And(&&)
function bothAreTrue(bool_1,bool_2); {
    var result = bool_1 && bool_2;
    return result;
}

var outputTrue = bothAreTrue(true, true);
console.log('should be true:', outputTrue);
var outputFalse = bothAreTrue(true, false);
console.log('should be false:', outputFalse);
//example
var friendCanGo = true;
var iCanGo = true;
var weWillAttend = friendCanGo && iCanGo;
console.log('Both my friend and I will go:', weWillAttend);


// 4. Combinations
function combination (bool_1, bool_2, bool_3); {
    var result = bool_1 && (bool_2 || bool_3);
    return result;
}

var outputTrue = combination(true, true, true);
console.log('should be true:', outputTrue);

var outputFalse = combination(true, false, false);
console.log('should be false:', outputFalse);

//example-booleans
var storeIsOpen = true;
var isHungry = true;
var isThirsty = true;
var willGoToStore = storeIsOpen && (isHungry||isThirsty);
console.log(willGoToStore);


// 5. Equal to (===)
function areEqual(param_1, param_2); {
    var result = param_1 === param_2;
    return result;
}

var OutputTrue = areEqual(1, 1);
console.log('should be true:', OutputTrue);

var outputFalse = areEqual(1, 2);
console.log('should be false:', OutputFalse);

//example-undefined
var undeclared;
var undefinedMatch = declared === undefined;
console.log('undefinedMatch:', undefinedMatch);
//example-booleans
var isRaining = true;
var weatherPredictedRain = true;
var weathermanWasRight = isRaining === weatherPredictedRain;
console.log('weathermanWasRight:', weathermanWasRight);
//example-numbers
var expectedCount = 10;
var actualCount = 9;
var expectationsMet = expectedCount === actualCount;
console.log('expectationsMet:', expectationsMet);
//example-stringns
var currentString = 'happiness';
var nextString = 'happiness';
var stringsMatch = currentString === nextString;
console.log('stringsMatch:', stringsMatch);


// 6. Not equal to(!==)
function areNotEqual (param_1, param_2) {
    var result = param_1 !== param_2;
    return result;
}

var outputTrue = areNotEqual (1, 2);
console.log('should be true:', outputTrue);

var outputFalse = areNotEqual (1, 1);
console.log('should be false:', outputFalse);

//example-undefined
var undeclared = 'something';
var undefinedDoesNotMatch = declared !== undefined;
console.log('undefinedDoesNotMatch:', undefinedDoesNotMatch);
//example-booleans
var isRaining = true;
var weatherPredictedRain = false;
var weathermanWasNotRight = isRaining !== weatherPredictedRain;
vonsole.log('weathermanWasNotRight:', weathermanWasNotRight);
//example-numbers
var expectedCount = 10;
var actualCount = 9;
var expectationsNotMet = expectedCount !== actualCount;
console.log('expectationsNotMet:', expectationsNotMet);
//example-strings
var currentString = 'happiness';
var nextString = 'sadness';
var stringsDoNotMatch = currentString !== nextString;
console.log('stringsDoNotMatch:', stringsDoNotMatch);

console.log("Testing git hub commit & push");
