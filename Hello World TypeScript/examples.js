// ctrl+shift+b // or run code (ctrl+alt+n)
//import {myFn} from './test1.js';
setContentExample();
addContent();
addContent("example.ts");
checkNumbers(1, 2);
//myFn();
var pName = CreateInstance();
PrintToPage(pName);
PrintToPage(); // default message = "hello world"
PrintToPage("---examples.ts finished");
var newFood = {
    name: "hi",
    color: "blue",
    isTasty: true,
    rating: 2
};
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
/**
 * JSDoc example
 * Set content on page.
 */
function setContentExample() {
    var message = 'Hello, World! - TypeScript';
    console.log(message);
    var output = document.getElementById('result');
    if (!output)
        return;
    output.innerHTML = message;
}
/**
 * Add content on page.
 * @param {string} message2 - the message.
 */
function addContent(message2) {
    if (message2 === void 0) { message2 = "default"; }
    // Find element, create p element, add content, add to page
    var message = 'Hello, World! - TypeScript new';
    if (message2 != "default")
        message = message2;
    var output = document.getElementById('result');
    if (!output)
        return;
    var p = document.createElement("p");
    p.textContent = message;
    output === null || output === void 0 ? void 0 : output.appendChild(p); //document.body.appendChild(heading); // add the heading the document 
}
/**
 * JSDoc example
 * Add content on page.
 * @param {number} number1 - first number.
 * @param {number} number2 - second number.
 */
function checkNumbers(number1, number2) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var finalNumber = number1 + number2;
    addContent("Success - " + finalNumber);
    //return rest.reduce((p, c) => p + c, 0);
}
/**
 * Add text to page.
 * @param {string} message - text to add to page.
 */
function PrintToPage(_message) {
    var myMessage = "Hello World!";
    // TODO check if exists?
    if (_message) {
        myMessage = _message;
    }
    //document.body.append("<br>");
    document.body.append(document.createElement("br"));
    //document.body.append("\n");
    document.body.append(myMessage);
}
/**
 * Create instance.
 * @param {string} message - text to add to page.
 * @returns {string} pName - person name of person created
 */
function CreateInstance() {
    var person = new Person();
    person.setName("Steve");
    //person.name = "Jane";
    var pName = person.getName();
    return pName;
}
/*
//Just an assertion Assertion:
(document.getElementById('myForm') as HTMLFormElement).reset();

//Assertion with check (recommended):
let form = document.getElementById('myForm')
if(form) (form as HTMLFormElement).reset();

//Not null assertion (if you want to access just HtmlElement member):
document.getElementById('myForm')!.click()
*/
// Fix: Cannot declare blocks error...
//export {}
