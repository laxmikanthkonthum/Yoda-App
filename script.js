var buttonholder = document.querySelector("#button-id");
var inputtext = document.querySelector(".inputbox")
var outputtext = document.querySelector(".outputbox")
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url="https://api.funtranslations.com/translate/klingon.json"
function urlConstructor(text){
    return url + "?" + "text=" + text;
}
function toFetch(updatedURL){
   // console.log("inside fetch", updatedURL)
    fetch(updatedURL)
    .then(response => response.json())
   // .then(json => outputDisplay)
    .then(json => {
        var output = json.contents.translated;
        outputtext.innerText = output;
     //.translate-output.innerText = output;
})
.catch(() => alert("some error occured"))

}
// function outputDisplay(){
//     var output = json.contents.translated;
//     outputtext.innerText = output;
// }
function clickFunction() {
    userInput = inputtext.value;
    modifiedInput = urlConstructor(userInput);
    //console.log("modified input", modifiedInput )
    toFetch(modifiedInput);
};

buttonholder.addEventListener("click",clickFunction)
//buttonholder.addEventListener("click",console.log("Clicked"))
