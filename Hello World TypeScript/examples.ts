// ctrl+shift+b // or run code (ctrl+alt+n)
//import {myFn} from './test1.js';


setContentExample();
addContent();
addContent("example.ts");
checkNumbers(1, 2);
//myFn();
const pName: string = CreateInstance();
PrintToPage("Person: " + pName);
PrintToPage(); // default message = "hello world"
PrintToPage("---examples.ts finished");



interface Food 
{
    name: string,
    isTasty: boolean,
    rating?: number 
}

interface Food1 extends Food {
    color: string
}
  
const newFood: Food1 = {
    name: "hi",
    color: "blue",
    isTasty: true,
    rating: 2
};

enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}
type WindowStates = "open" | "closed" | "minimized";

/**
 * JSDoc example
 * Set content on page.
 */
function setContentExample(): void
{
    let message: string = 'Hello, World! - TypeScript'; 
    console.log(message);

    const output = document.getElementById('result');
    if (!output) return;
    output.innerHTML = message;
}

/**
 * Add content on page.
 * @param {string} message2 - the message.
 */
function addContent(message2: string = "default"): void
{
    // Find element, create p element, add content, add to page
    let message: string = 'Hello, World! - TypeScript new'; 
    if(message2 != "default") message = message2;
    const output = document.getElementById('result');
    if (!output) return;
    const p = document.createElement("p");
    p.textContent = message;
    output?.appendChild(p); //document.body.appendChild(heading); // add the heading the document 
}

/**
 * JSDoc example
 * Add content on page.
 * @param {number} number1 - first number.
 * @param {number} number2 - second number.
 */
function checkNumbers(number1?: number, number2?: number, ...rest: number[]): void
{
    let finalNumber = number1 + number2;
    addContent("Success - " + finalNumber);
    //return rest.reduce((p, c) => p + c, 0);

}

/**
 * Add text to page.
 * @param {string} message - text to add to page.
 */
function PrintToPage(_message?: string): void
{
    let myMessage: string = "Hello World!";
    // TODO check if exists?
    if(_message){ 
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
function CreateInstance(): string
{
    const person = new Person();
    person.setName("Steve");
    //person.name = "Jane";
    const pName: string = person.getName();
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