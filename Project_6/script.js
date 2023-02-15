console.log("hello");

let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenValue = "";
console.log(screen);
for (let item of button) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;  // For Inputting the Values
        console.log(buttonText, item);
        if (buttonText == "X") {
            buttonText = "*";
            screenValue+=buttonText;
            screen.value = screenValue;
            
        } else if (buttonText == "C") {
            {
                screenValue = "";
                screen.value =screenValue;
            }
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        // screen.value="";

    })
}