// console.log("Script is working from diffrent file.")





// // #part1

// var x=prompt("gimme a usernme.")

// alert("this script works!!"+x)





var button_translate = document.querySelector("#btn-translate")
// console.log(button_translate)

var txtinput = document.querySelector("#txt-input")
// console.log(txtinput)

var outputDiv = document.querySelector("#output" );
// outputDiv.innerText = "Sarthak"


// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" +text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server! try again after some time.")
}

function clickEventHandler(){
    // console.log("clicked!")
    // console.log("input", txtinput.value);

    // outputDiv.innerText = "ajsjsjsjsjsjsj "+ txtinput.value

    var inputText = txtinput.value;
    fetch(getTranslationURL(inputText)).then(response => response.json()).then(json =>{
        // console.log(json.contents.translated))
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    }) .catch(errorHandler)
}

button_translate.addEventListener("click", clickEventHandler)


//linked in== document.queryselectorAll(".artdeco-button--secondary")
//   .forEach(item => setTimeout(item.click(),Math.random=1000)

//queryselector--blog,read,quiz   css_selector

//encode uri


// firebase, aws amplify

// console--network--get and all requests      - fetch(url)    blog topics also

//postman tool


//google hack= document.body.style.backgroundColor = "green"

//browser events in javascript

//eloquent javascript

//console_get  ===  fetch(url).then(response => response.json()).then(json => console.log(json))   or   
                //  fetch(url).then(function responseHandler(response)) { return response.json() })
                //  .then(function logJSON(json) { console.log(json)})
// arrow function in js
 
 //encode URI