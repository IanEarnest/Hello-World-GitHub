/*
//@ts-nocheck
*/
//@ts-check
// The TypeScript engine will check all JavaScript in this file.
// or jsconfig - "checkJs": true
/*
setContentExample2();
addContent2();
checkNumbers2(1, 2);
*/
addContent2("tsnobuild");

const personDescription = (name, city, age) =>
`${name} lives in ${city}. he's ${age}. In 10 years he'll be ${age + 10}`;
addContent2(personDescription("steve", "here", 20));



/**
 * JSDoc example
 * Set content on page.
 */
function setContentExample2()
{
    let message = 'Hello, World! - TypeScript'; 
    console.log(message);

    const output = document.getElementById('result');
    if (!output) return;
    output.innerHTML = message;
}

/**
 * Add content on page.
 * @param {string} message2 - the message.
 */
function addContent2(message2 = "default")
{
    // Find element, create p element, add content, add to page
    let message = 'Hello, World! - TypeScript new'; 
    if(message2 != "default") message = message2;
    const output = document.getElementById('result');
    if (!output) return;
    const p = document.createElement("p");
    p.textContent = message;
    output?.appendChild(p); //document.body.appendChild(heading); // add the heading the document 
}
