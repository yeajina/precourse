// 1. Creating an Array ([])

var fruits = ['apples', ' bananas', 'oranges'];
var scores = [100, 99, 98, 97, 96];
var empty = [];  // variable with no parameters but creates an array by []
console.log('fruits:', fruits);
console.log('scores:', scores);
console.log('empty:', empty);

function createArray() {
    var result = [];
    return result;
}
var resultArray = createArray();
console.log('should be an array:', Array.isArray(resultArray)); //Array.isArray() is a method that determines whether the passed value is an Array


// 2. Accessing an Element in an Array
    // recall that arrays are zero-indexed

var array = [1, 2, 3, 4];
var secondElement = array[1];
console.log('secondElement:', secondElement);

var breakfastOptions = ['eggs', 'bacon', 'pancakes', 'coffee', 'milk'];
var index = 3;
var breakfastChoice = breakfastOptions[index];
console.log('breakfastChoice:', breakfastChoice);

function accessAnElement(array, index) {
    var result = array[index];
    return result;
}

var resultElement = accessAnElement(['computer', 'mouse', 'ethernet cable'], 2); //note the array is in [] within ()
console.log('should be "ethernet cable:', resultElement);


// 3. Reassigning an Element in an Array (=)

var array = ['Jan', 'Mar', 'Mar'];
console.log('before reassignment:', array);

array[1] = 'Apr';
console.log('after reassignment:', array);

//with variables
var marvelHeroes = ['IM', 'CA', 'BW', 'HE'];
console.log('before reassignment:', marvelHeroes);

var indexToCorrect = 3;
var marvelHeroToBeAdded = 'SW';

marvelHeroes[indexToCorrect] = marvelHeroToBeAdded;
console.log('after reassignment:', marvelHeroes));

function reassignAnElement(array, index, newValue) {
    array[index] = newValue;
    return array;
}

var resultArray = reassignAnElement(['desk', 'lamp', 'toy'], 2, 'textbook');
console.log('should replace "toy" with "textbook":', resultArray);


// 4. Getting length of an array (.length)

var lengthOfArray = [1, 2, 3, 4].length;
console.log('lengthOfArray:', lengthOfArray);

var legends = ["Alan Turing", "Ada Lovelace", "Al-Kwarizmi", "Edsger Dijkstra"]
var lengthOfLegendsArray = legends.length;
console.log('lengthOfLegendaryArray:', lengthOfLegendsArray);

function getArrayLength(array) {
    var length = array.length;
    return length;
}

var resultLength1 = getArrayLength([1, 3, 4, 5, 7]);
console.log('should log 5:', resultLength1);

var resultLength2 = getArrayLength(['a', 'b', 'c', 'd']);
console.log('should log 4:', resultLength2);


// 5. Getting last element of an array (.length -1)

var lastElement = [1, 2, 3, 4, 5] [[1, 2, 3, 4, 5].length - 1];
console.log('lastElement:', lastElement);

var numberSequence = [1, 2, 3, 4, 5];
var lastIndex = numberSequence.length - 1;

var lastElement = numberSequence[lastIndex] //need [] around .length - 1
console.log('lastElement:', lastElement);

function getLastElement(array) {
    var lastIndex = array.length - 1;
    var lastElement = array[lastIndex];
    return lastElement;
}

var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);


// 6. Adding element to back of an array (.push)

var array = [1, 2, 3, 4];
array.push(5);
console.log('array with added element:', array);

var messages = ['Hey', 'Sounds good', 'See you then'];
var newMessage = "Omw";
messages.push(newMessage);
console.log('list of messages with new message:', messages);

function applyPush (array, element) {
    array.push(element);
    return array;
}

var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2);


// 7. Removing element from back of an array (.pop)

var array= [1, 2, 3, 4];
var elementPopped = array.pop();
console.log('array without removed element:', array);
console.log('element removed:', elementPopped);

var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Sunday'];
var dayPopped = weekdays.pop();
console.log('week days with last element removed:', weekdays);
console.log('last day removed:', dayPopped);

function applyPop(array) {
    var popped = array.pop(array)); //array.pop is the function that (array) is being applied with
    return popped;
}

var resultElement1 = applyPop([1, 171, 129]);
console.log('should log 129:', resultElement1);

var resultElement2 = applyPop(['islands', 'peninsulas', 'pacific']);
console.log('should log pacific:', resultElement2);


