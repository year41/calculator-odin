const add = (firstNum, secondNum) => firstNum + secondNum;
const subtract = (firstNum, secondNum) => firstNum - secondNum;
const multiply = (firstNum, secondNum) => firstNum * secondNum;
const divide = (firstNum, secondNum) => firstNum / secondNum;

let firstNum = "";
let secondNum = "";
let operator = null

const assignOperator = function (btn, sign) {
    btn.addEventListener("click", () => {
        if (secondNum !== "") (firstNum = secondNum);
        secondNum = "";
        operator = sign;
    });
};

const operate = (firstNum, operator, secondNum) => operator(Number(firstNum), Number(secondNum));

const display = document.querySelector("#display");

const displayNum = function (btn, num) {
    btn.addEventListener("click", () => {
        if (display.textContent === '0') (display.textContent = "");
        if (display.textContent.length === 11) return "";
        if (secondNum === "") (display.textContent = "");
        secondNum += num;
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

const btnAdd = document.querySelector("#add");
assignOperator(btnAdd, add);

const btnSubtract = document.querySelector("#subtract");
assignOperator(btnSubtract, subtract);

const btnMultiply = document.querySelector("#multiply");
assignOperator(btnMultiply, multiply);

const btnDivide = document.querySelector("#divide");
assignOperator(btnDivide, divide);

const btnEqual = document.querySelector("#equal");
btnEqual.addEventListener("click", () => {
    firstNum = display.textContent = operate(firstNum, operator, secondNum);
    operator = null
    secondNum = "";
    firstNum;
});

const allClear = document.querySelector("#ac");
allClear.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = null;
    display.textContent = 0;
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
    secondNum = secondNum.slice(0, -1);
    display.textContent = secondNum;
    console.log("first", firstNum);
    console.log("second", secondNum);
});