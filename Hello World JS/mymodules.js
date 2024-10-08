//import * as indexScript from "mymodules.js";
//indexScript.myModulesScript();
window.addEventListener("load", m_firstLoad);
export function m_firstLoad() {
    console.log("ZC_firstLoad loaded");
    document.getElementById('hiworld').innerHTML += " + m_firstLoad loaded";
}


//import "https://code.jquery.com/jquery-3.6.0.min.js";
import * as indexScript from "./myothermodule.js";

// Starting script
myModulesScript();
indexScript.myOtherModulesScript();

export function myModulesScript() {
    console.log("myModulesScript run");
    document.getElementById('hiworld').innerHTML += " + myModulesScript run";
}
