/**
 * Add content on page.
 * @constructor
 * @param {string} message2 - the message.
 */
function JSDocExample1(message2: string = "default"): void
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