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

function addTogetherTwoStrings(string1, string2); {
    var result = string1 + string2;
    return result;
}

var resultStringa = addTogetherTwoStrings("Lap", "top");
console.log('should be Laptop:', resultStringa);
var resultStringb = addTogetherTwoStrings("I", "pad");
console.log('should be Ipad:', resultStringb);
