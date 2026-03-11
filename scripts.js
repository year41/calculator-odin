const add = (firstNum, secondNum) => firstNum + secondNum;
const subtract = (firstNum, secondNum) => firstNum - secondNum;
const multiply = (firstNum, secondNum) => firstNum * secondNum;
const divide = (firstNum, secondNum) => firstNum / secondNum;

let firstNum = "";
let secondNum = "";
let operator = null;

const assignOperator = function (btn, sign) {
    btn.addEventListener("click", () => {
        if (secondNum === "") return operator = sign;
        if (secondNum !== "" && operator !== null) {
            if (operator === divide && secondNum === "0") {
                display.style.fontSize = "14px";
                display.textContent = `Did you really try to divide 0!? Try again ${firstNum} ÷ ?`;
                return;
            };
            firstNum = operate(firstNum, operator, secondNum);
            firstNum = displayOverflow(firstNum);
            display.textContent = firstNum;
        } else {
            firstNum = secondNum;
        };
        secondNum = "";
        operator = sign;
    });
};

const operate = (firstNum, operator, secondNum) => operator(Number(firstNum), Number(secondNum));

const display = document.querySelector("#display");

const displayOverflow = function (num) {
    if (num.toString().length > 11) {
        const shortNum = num.toPrecision(6);
        return shortNum;
    } else {
        return num;
    };
};

const displayNum = function (btn, num) {
    btn.addEventListener("click", () => {
        display.style.fontSize = "28px";
        if (num === "." && secondNum.includes(".")) return "";
        if (secondNum === "0") (secondNum = "");
        if (secondNum.length === 11) return "";
        if (secondNum === "") (display.textContent = "");
        secondNum += num;
        display.textContent = secondNum;
    });
};

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

const dot = document.querySelector("#dot");
displayNum(dot, ".");

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
    if (operator === divide && secondNum === "0") {
        display.style.fontSize = "14px";
        display.textContent = `Did you really try to divide 0!? Try again ${firstNum} ÷ ?`;
        return;
    };
    if (operator !== null && secondNum === "") {
        return display.textContent = "# ERROR";
    };
    firstNum = operate(firstNum, operator, secondNum);
    firstNum = displayOverflow(firstNum);
    display.textContent = firstNum;
    operator = null;
    secondNum = "";
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
    if (secondNum !== "") {
        display.textContent = secondNum;
    } else {
        display.textContent = "0";
    };
});

const negative = document.querySelector("#negative");
negative.addEventListener("click", () => {
    if (secondNum === "0" || secondNum === "") return "";
    if (secondNum.startsWith("-")) {
        secondNum = secondNum.slice(1, secondNum.length);
    } else {
        secondNum = `-${secondNum}`;    
    }
    display.textContent = secondNum;
})

display.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.key === "9") return num9.click();
    if (event.key === "8") return num8.click();
    if (event.key === "7") return num7.click();
    if (event.key === "6") return num6.click();
    if (event.key === "5") return num5.click();
    if (event.key === "4") return num4.click();
    if (event.key === "3") return num3.click();
    if (event.key === "2") return num2.click();
    if (event.key === "1") return num1.click();
    if (event.key === "0") return zero.click();
    if (event.key === ".") return dot.click();
    if (event.key === "+") return btnAdd.click();
    if (event.key === "-") return btnSubtract.click();
    if (event.key === "*") return btnMultiply.click();
    if (event.key === "/") return btnDivide.click();
    if (event.key === "=" || event.key === "Enter") return btnEqual.click();
    if (event.key === "Escape") return allClear.click();
    if (event.key === "Backspace") return backspace.click();
    return "";
});

function getRandomCol() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

const randomCol = document.querySelector("#rndm");
randomCol.addEventListener("click", () => {
    const head1 = document.querySelector("h1");
    head1.style.color = getRandomCol();

    const baseCalculator = document.getElementById("container");
    baseCalculator.style.backgroundColor = getRandomCol();

    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(btn => {
        btn.style.backgroundColor = getRandomCol();
        btn.style.color = getRandomCol();
    });
});