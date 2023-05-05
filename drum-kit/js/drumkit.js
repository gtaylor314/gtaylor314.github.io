function playSound(drumChar) {

    switch (drumChar) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(drumChar);
    }

}

function playAnimation(drumChar) {
    var drumSelected = document.querySelector("." + drumChar);
    drumSelected.classList.add("pressed");
    setTimeout(function() {drumSelected.classList.remove("pressed");}, 100);
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.textContent);
        playAnimation(this.textContent);
    });
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    playAnimation(event.key);
})