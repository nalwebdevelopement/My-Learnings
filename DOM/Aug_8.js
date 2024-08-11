let h = document.querySelector("h4");
h.style.textAlign = "center";
let ourscreen = document.querySelector(".screen");
ourscreen.innerHTML = "welcome";

const changeScreenInput = (userInput) =>
{
    ourscreen.innerHTML = userInput
    bt = document.querySelector("button");
    bt.style.backgroundColor = "red"
    console.log ( bt.innerText);
};

const enterUser = () =>
{
    let response = prompt("Enter the new input");
    changeScreenInput(response);
};


const changeColor = (color) => {
    let site = document.querySelector("body");
    site.style.backgroundColor = color;
    site.style.all;
  };

  
  
    const toggleItem = () => {
        let ourBox = document.querySelector(".box");
        ourBox.classList.toggle("circle");
        ourBox.innerHTML = "Welcome to the Matrix";
      };
  