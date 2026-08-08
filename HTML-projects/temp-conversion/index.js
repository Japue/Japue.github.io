const input = document.getElementById("inputBox");
const inputUnit = document.getElementById("inputUnit");
const ctof = document.getElementById("CtoF");
const ftoc = document.getElementById("FtoC");
const output = document.getElementById("outputP");
const outputUnit = document.getElementById("outputUnit");
let result;

function convert(){
    if (input.value == ""){
        result = "Input a valid number";
        inputUnit.textContent = "";
        outputUnit.textContent = "";
    } else if (!(ctof.checked || ftoc.checked)) {
        result = "Select a conversion type";
        inputUnit.textContent = "";
        outputUnit.textContent = "";
    } else {
        if (ctof.checked) {
            result = Number(input.value) * 1.8 + 32
            inputUnit.textContent = "°C";
            outputUnit.textContent = "°F";
        } else {
            result = (Number(input.value) - 32) / 1.8
            inputUnit.textContent = "°F";
            outputUnit.textContent = "°C";
        }
    }
    output.textContent = result;
}
