// Web Components
// Closed off styles - https://www.youtube.com/watch?v=2I7uX8m0Ta0
const template = document.createElement("template")
template.innerHTML = `
    <style>
        h3 { color: blue }
    </style>
    <h3>
    <slot></slot>
    </h3>
    `
    
    class TodoItem extends HTMLElement {
        constructor() {
            super()
            const shadow = this.attachShadow({ mode: "open" });
            shadow.append(template.content.cloneNode(true))
            //...<h3 data-title>
            //this.title = shadow.querySelector("[data-title]")
            //this.title.innerText = this.innertext
            //this.innerHTML = `<h3>${this.innerText}</h3>`
    }
}

customElements.define("todo-item", TodoItem);

// Shadow dom
