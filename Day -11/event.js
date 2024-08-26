
//detecting Button Press

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum") [i].addEventListener("click", function(){
       // alert("I got clicked!");
        //(this.style.color="white");
       
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    });

}

//Detecting Keyboard Press

document.addEventListener("keypress" , function(event){

    makeSound(event.key)

    buttonAnimation(event.key)

});

    function makeSound(key){

        switch (key){
            case "w":
                var tom1 =new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;

            case "a":
                var tom2 =new Audio("sounds/tom-2.mp3");
                audio.play();
            break;

            case "s":
                var tom3 =new Audio("sounds/tom-3.mp3");
                audio.play();
            break;

            case "d":
                var tom4 =new Audio("sounds/tom-4.mp3");
                audio.play();
            break;

            case "j":
                var tom5 =new Audio("sounds/tom-5.mp3");
                audio.play();
            break;
                

            case "k":
                var audio =new Audio("sounds/tom-6.mp3");
                audio.play();
            break;

            default: console.log(buttonInnerHtml);
        }

    };




function makeSound(key){

}

function buttonAnimation(currentKey){

   var activeButton = document.querySelector("."+ currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   } , 100);

}  