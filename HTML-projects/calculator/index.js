const resultBox = document.getElementById("resultBox");
let result = "";
let hasComma = false;
let numOfOperations = 0;

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};

function zero(){
    result += "0";
    resultBox.textContent = result;
}

function one(){
    result += "1";
    resultBox.textContent = result;
}

function two(){
    result += "2";
    resultBox.textContent = result;
}

function three(){
    result += "3";
    resultBox.textContent = result;
}

function four(){
    result += "4";
    resultBox.textContent = result;
}

function five(){
    result += "5";
    resultBox.textContent = result;
}

function six(){
    result += "6";
    resultBox.textContent = result;
}

function seven(){
    result += "7";
    resultBox.textContent = result;
}

function eight(){
    result += "8";
    resultBox.textContent = result;
}

function nine(){
    result += "9";
    resultBox.textContent = result;
}

function plus(){
    result += " + ";
    hasComma = false;
    numOfOperations += 1;
    resultBox.textContent = result;
}

function minus(){
    result += " - ";
    hasComma = false;
    numOfOperations += 1;
    resultBox.textContent = result;
}

function multiply(){
    result += " * ";
    hasComma = false;
    numOfOperations += 1;
    resultBox.textContent = result;
}

function divide(){
    result += " / ";
    hasComma = false;
    numOfOperations += 1;
    resultBox.textContent = result;
}

function comma(){
    if(!hasComma){
        result += ".";
        hasComma = true;
    }
    resultBox.textContent = result;
}

function trash(){
    result = "";
    hasComma = false;
    numOfOperations = 0;
    resultBox.textContent = result;
}

function equals(){
    if (numOfOperations != 0) {
        for (let operation = 0; operation < numOfOperations - 1; operation++) {
            let spaceIndex = result.indexOf(" ");
            let firstNum = Number(result.slice(0, spaceIndex));
            let operator = result[spaceIndex + 1];
            let secondSpaceIndex = result.indexOf(" ", spaceIndex + 3)
            let secondNum = Number(result.slice(spaceIndex + 3, secondSpaceIndex));
            result = String(operations[operator](firstNum, secondNum)) + result.slice(secondSpaceIndex);
        }
        let spaceIndex = result.indexOf(" ");
        let firstNum = Number(result.slice(0, spaceIndex));
        let operator = result[spaceIndex + 1];
        let secondNum = Number(result.slice(spaceIndex + 3));
        result = String(operations[operator](firstNum, secondNum));
    }
    numOfOperations = 0;
    resultBox.textContent = result;
}