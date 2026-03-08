const add = (firstNum, secondNum) => firstNum + secondNum;
const subtract = (firstNum, secondNum) => firstNum - secondNum;
const multiply = (firstNum, secondNum) => firstNum * secondNum;
const divide = (firstNum, secondNum) => firstNum / secondNum;

let firstNum = 0;
let secondNum = 0;
let operator = null;

const operate = (firstNum, operator, secondNum) => operator(firstNum, secondNum);

const display = document.querySelector("#display");

const displayNum = function (btn, num) {
    btn.addEventListener("click", (event) => {
        if (display.textContent === "0") (display.textContent = "");
        display.textContent += num;
    });
}

const num9 = document.querySelector("#num9");
displayNum(num9, 9);

const num8 = document.querySelector("#num8");
displayNum(num8, 8);

const num7 = document.querySelector("#num7");
displayNum(num7, 7);

const num6 = document.querySelector("#num6");
displayNum(num6, 6);

const num5 = document.querySelector("#num5");
displayNum(num5, 5);

const num4 = document.querySelector("#num4");
displayNum(num4, 4);

const num3 = document.querySelector("#num3");
displayNum(num3, 3);

const num2 = document.querySelector("#num2");
displayNum(num2, 2);

const num1 = document.querySelector("#num1");
displayNum(num1, 1);

const zero = document.querySelector("#zero");
displayNum(zero, 0);