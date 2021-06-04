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
