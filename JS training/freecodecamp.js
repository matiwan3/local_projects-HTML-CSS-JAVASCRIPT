// coment
var number = 5;

/* this
is a multi-line comment
he
*/
// data types: undefined, null, boolean, string, symbol, number, object

var myName = "Matitati"
myName = 8
let ourName = "freeCodeCamp"
const pi = 3.14

var a;
console.log(a)
var b = 2;
a = 7;
b = a;
console.log(a)

var c = 9;

var a = 5;
var b = 10;
var c = "I am a"

var STUDLYCAPVAR;
var PROPERCamelCase;
var tITLEcASEoVER;

STUDLYCAPVAR = 10;
PROPERCamelCase = "A String";
tITLEcASEoVER = 9000;

var sum = 10 + 10;
console.log(sum)
var difference = 45 - 33;

var product = 8 * 10;
var quotient = 66 / 33;

var myVar = 87;
myVar = myVar + 1
myVar++;

var myVar = 11;
myVar--;

var ourDecimal = 5.7;
var myDecimal = 0.0009
var product = 2.0 * 0.0;
var quotient = 4.4 / 2.2; 
var remainder;
remainder = 11 % 3; // Modulo

var a = 3;
var b = 17;
var c = 12;

a = a + 12;
b = 9 + b;
c = c+7;

a += 12;
b += 9;
c += 7;

a = a - 6;
b = b - 15;
c = c - 1;

a -= 6;
b -= 15;
// += , -= , *= , /=

var firstName = "Alan";
var lastName = "Turing"

var myFirstName = "Matt"
var myLastName = "Carnes"

var myStr = "I am a \"double quoted\"string inside\"double quotes";
console.log(myStr)

var ourStr = "I come first." + "I come second.";
var myStr = "This is the start. " + "This is the end."
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. "
myStr += "This is the second sentence"

var firstName = "Adamada"
firstNameLength = firstName.length
console.log(firstNameLength)

firstLetterOfFirstName = firstName[0];
console.log(0)

// Strings are immutable
myStr = "Hello World"

var thirdLetterOfLastName = lastName;

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

var ourArray = ["John", 23];
var myArray = ["Quincy", 1];

var ourArray = [["the universe", 42], ["Everything", 101010]]

var ourArray = [["the universe", 42], ["Everything", 101010]]

var ourArray = [50,60,70]
var ourData = ourArray[0]
// arrays are mutable

var ourArray = ["stimpson", "J", "Cat"];
ourArray.push(["happy", "joy"]);
var removedFromOurArray = ourArray.pop()
var removedFromOurArray = ourArray.shift()
var removedFromOurArray = ourArray.unshift("Happy");

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray;

function ourReusableFunction(){
    console.log("Heyya, World")
}

ourReusableFunction();

function reusableFunction() {
    console.log("Hi Wolrd");
}

reusableFunction();

function ourFunctionWithArgs(a, b){
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function FunctionWithArgs(a, b) {
    console.log(a + b)
}
FunctionWithArgs(5, 2)

var myGlobal = 10;

function fun1(){
    oopsGlobal = 5 // becomes global automatically without var
}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
        }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar);

var outerWear = "T-shirt"

function myOutfit() {
 var outerWear = "sweater"
 return outerWear
}

console.log(myOutfit());
console.log(outerWear)


function minusSeven(num) {
    return num - 7
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5
}

console.log(timesFive(5))

var sum = 0;
function addThree() {
    sum = sum + 3
}

function addFive(){
    sum += 5
}

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);
var processed = 0;

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift(); //removes first item and removes it
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans() {
    return false;
}

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

function testEqual(val) {
    if (val === 12) {
        return "Equal"
    }
    return "Not Equal";
}

testEqual(10);

function compareEquality(a,b) {
    if (a == b) {
    return "Equal";    
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal"
    }
    return "Equal"
}
console.log(testNotEqual(16));

/*
>
<
>=
<=
&& = and
|| = or
*/

function testLogicalOr(val) {
    if (val < 10) {
        return "Outside";
    }
    return "Inside";
}

function testElse(val) {
    var result = "";

    if (val > 5)
    pass
}


// if
// else
// else if
// javascript is a programming language





































































































































































































































































































































































































































































































































































































































































































