var btnTranslate = document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputText=document.querySelector("#output-text");
//var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverUrl="https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return serverUrl+"?"+"text="+text;
}
function errorhandler(error){
    alert("Server is down, please try after sometime", error)
}

function clickHandler(){
    var inputText=txtInput.value;

    fetch(getTranslation(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputText.innerText=translatedText;})
    .catch(errorhandler)
};
btnTranslate.addEventListener("click", clickHandler)