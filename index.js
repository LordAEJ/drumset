var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// detecting button press
for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        //what happens when you click a button
    });

}

// detecting keyboard press
document.addEventListener("keypress", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound (key) {
    switch (key) {
                case "w":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                
                case "W":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;

                case "a":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

                case "A":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

                case "s":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                    
                case "S":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;

                case "d":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;

                case "D":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;

                case "j":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

                case "J":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

                case "k":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

                case "K":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

                case "l":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;

                case "L":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;

                default: console.log();



                    break;
            }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}