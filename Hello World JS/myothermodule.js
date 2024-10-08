window.addEventListener("load", OM_firstLoad);
export function OM_firstLoad() {
    console.log("OM_firstLoad loaded");
    document.getElementById('hiworld').innerHTML += " + OM_firstLoad loaded";
}



export function myOtherModulesScript() {
    console.log("myOtherModulesScript run");
    document.getElementById('hiworld').innerHTML += " + myOtherModulesScript run";
}
