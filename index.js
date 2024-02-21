/* Lesson 136 Test to make sure index.js file is being called by the index.html file

alert ("Hello");

*/

/* Lesson 136 Test to make sure that the Event Listener has been added to the first button

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked!");
}
*/

/* Lesson 136 How to select and count the number of elements in the class .drum, and then show the alert "I got clicked!" when any button is clicked

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberofDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("I got clicked!");

    });
}
*/

/* Lesson 139 How to change the color of a button to white when clicked 

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberofDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        console.log(this.style.color = "white");
                 
    });

}
*/

/* Lesson 140 How to change the color of a button to white when clicked 

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberofDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3")
                snare.play();
                break;

            case "k":
                var crash = new Audio("sounds/crash.mp3")
                crash.play();
                break;

            case "l":
                var kick = new Audio("sounds/kick-bass.mp3")
                kick.play();
                break;       

        default: console.log(buttonInnerHTML);
  
        }
                 
    });

}
*/

//Lesson 144 Using Keyboard Event Listeners to Check for Key Presses

//Detecting Button Press, i.e. if a button on the screen is clicked
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberofDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    
    buttonAnimation(buttonInnerHTML);
   
    });

}
//Detecting Keyboard Press, i.e. if a key on the keyboard is pressed

document.addEventListener("keypress", function(event){
    
    makeSound(event.key);

    makeSound(event.key);

});

//Play sound

function makeSound(key){

    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
                
        default: console.log(key);

    }
}

function buttonAnimation(currentKey) {

   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   
   setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}