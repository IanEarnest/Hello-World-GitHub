// ctrl+shift+b // or run code (ctrl+alt+n)
setContent();

/**
 * JSDoc example
 * Set content on page.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function setContent(): void
{
    let message: string = 'Hello, World! - TypeScript'; 
    console.log(message);

    const output = document.getElementById('result');
    if (!output) return;
    output.innerHTML = message;
}