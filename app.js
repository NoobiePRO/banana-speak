// console.log("Script is working from diffrent file.")





// // #part1

// var x=prompt("gimme a usernme.")

// alert("this script works!!"+x)





var button_translate = document.querySelector("#btn-translate")
// console.log(button_translate)

var txtinput = document.querySelector("#txt-input")

console.log(txtinput)

function clickEventHandler(){
    console.log("clicked!")
    console.log("input", txtinput.value);
}

button_translate.addEventListener("click", clickEventHandler)









//google hack= document.body.style.backgroundColor = "green"

//browser events in javascript

//eloquent javascript

