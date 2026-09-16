// Select all buttons
let buttons = document.querySelectorAll("button");

// Store entered number
let number = "";

// Display
let display = document.createElement("h2");
display.style.color = "white";
display.style.textAlign = "center";
display.style.marginBottom = "15px";
display.innerText = "0";

document.querySelector(".calu").prepend(display);

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        if(btn.innerText === "Submit"){
            if(number === ""){
                display.innerText = "Enter Number";
            }else{
                display.innerText = number;
            }
        }
        else{
            number += btn.innerText;
            display.innerText = number;
        }

    });
});