// 1. Creating a String
    // Javascript string stores a series of characters (e.g. "Excelsior!")
    // Possible to access an entire string, or individual character(s) within it; characters in a string are indexed, starting with 0

var newString = "a series of characters";
console.log('newString:', newString);

function createString() {
    var result = :""
    return result;
}

var resultString = createString();
console.log('should be a string type:', typeof resultString);


// 2. Accessing Characters within String
    // String index starts from 0
    // Spaces count as an index

var name = "Robert Talls";
var firstCharacter = name[0];
var eighthCharacter = name[7];
console.log('firstCharacter:', firstCharacter); // should be "R"
console.log('eigthCharacter:', eighthCharacter); // should be "T"

var name = "Robert Talls";
var index = 1;
var secondCharacter = name[index];
console.log('secondCharacter:', secondCharacter); // should be "o"

function accessACharacter(string, index) {
    var result = string[name];
    return result;
}

var resultCharacter = accessACharacter('Laptop', 3);
console.log('should be "t":', resultCharacter);


// 3. Reassigning a String
    // Strings are immutable; cannot be changed once they are created
    // Instead, can reassign a variable from one string to another

var job = "Shipping Coordinator";
console.log('job before reassignment:', job);
//reassignment
job = "Director of Shipping";
console.log('job after reassignment:', job);

function reassignAString(string) {
    input = "reassigned";
    return input;
}

var resultString1 = reassignAString('Computer Science');
console.log('should be reassigned:', resultString1);
var resultString2 = reassignAString('Software Engineering');
console.log('should also be reassigned:', resultString2);


// 4. Add together or Concatenate two or more Strings (+)

var firstName = "Robert";
var lastName = "Talls";
var fullName = firstName + lastName;
console.log('fullName without Space:', fullName);

//full name with space
var firstName = "Robert";
var lastName = "Talls";
var fullName = firstName + " " + lastName;
console.log('fullName with Space:', fullName);

function addTogetherTwoStrings(string1, string2) {
    var result = string1 + string2;
    return result;
}

var resultStringa = addTogetherTwoStrings("Lap", "top");
console.log('should be Laptop:', resultStringa);
var resultStringb = addTogetherTwoStrings("I", "pad");
console.log('should be Ipad:', resultStringb);


var resultStringa = addTogetherTwoStrings("Lap", "top");
console.log('should be Laptop:', resultStringa);
var resultStringb = addTogetherTwoStrings("I", "pad");
console.log('should be Ipad:', resultStringb);


// 5. String Interpolation (+, but there are other methods also)
    // Returning a message based on the inputs

var food = "pizza";
var methodOfTransportation = "the train";
var sentence = "The best way to travel to get" + food + " is surely to take " + methodOfTransportation;
console.log('resulting sentence:', sentence);

function InterpolateAString(activity, dayOfTheWeek) {
    var result = 'We will go ' + activity + ' on ' + dayOfTheWeek + '.';
    return result;
}

var resultMessage1 = interpolateAString('hiking', 'Friday');
console.log("should log 'We will go hiking on Friday.':", resultMessage1);
var resultMessage2 = interpolateAString('dancing', 'Tuesday');
console.log("should log 'We will go dancing on Tuesday.'", resultMessage2);


// 6. Length of String (.length)
var lengthOfName = "Alan Turing".length;
console.log('legnthOfName version 1:', lengthOfName);

var name = "Alan Turing";
var lengthOfName = name.length;
console.log('lengthOfName version 2:', lengthOfName);

function getStringLength(string) {
    var length = string.length;
    return length;
}


// 7. Last Character of String (.length - 1)
    // In cases where we don't know how long the string in question is

var lastCharacter = "JavaScript"["JavaScript" - 1];
console.log('last character:', lastCharacter);

var language = "JavaScript";
var lastIndex = language.length - 1;
var lastCharacter = language[lastIndex];
console.log('lastCharacter:', lastCharacter);


function getLastCharacter(string) {
    var lastIndex = string.length;
    var lastCharacter = string[lastIndex];
    return lastCharacter;
}

var resultCharacter1 = getLastCharacter('Apple');
console.log('should log "a":', resultCharacter1)
var resultCharacter2 = getLastCharacter('Microsoft');
console.log('should be "m":', resultCharacter2);


// 8. Getting a portion of String (.substring())

var subString = "JavaScript".substring(2, 9);
console.log('portion of string from before index 2, up to, but not including, index 9:', subString);

var subString = "JavaScript".substring(1);
console.log('portion of string from before index 1, to the end of the string:', subString);

var subString = "Javascript".substring();
console.log('portion which includes entire string:', subString);

var language = "JavaScript"l;
var startIndex = 2;
var endIndex = 9;
var subString = language.substring(startIndex, endIndex);
console.log('portion of string from before startIndex, up to, but not including, endIndex:', subString);


function applySubString(string, start, end) {
    var subString = string.substring(start, end);
    return subString;
}

var string1 = 'Queue';
var resultSubString1 = applySubString(string1, 1, 4); //grabs only 1-3
console.log('should log "ueu":', resultSubString1);

var string2 = 'Stack Trace';
var resultSubString2 = applySubString(string2, 2, 10); //grabs only 2-9
console.log('should log "ack Trac":', resultSubString2);

