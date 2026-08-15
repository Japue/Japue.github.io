import createModule from "./fractal.js";

const fractalSelectionBox = document.getElementById("fractal-select");
const iterationsBox = document.getElementById("iterations");
const scalingBox = document.getElementById("scaling");
const button = document.getElementById("submit");

let Module;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

function draw(lines) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    ctx.strokeStyle = "white";

    ctx.beginPath();
    for (let i = 0; i < lines.size(); i++) {
        const line = lines.get(i);
        ctx.moveTo(line.begin.x, line.begin.y);
        ctx.lineTo(line.end.x, line.end.y);
    }
    ctx.stroke();

    ctx.restore();
}

function fractalSelect(Module) {
    const iterations = parseInt(iterationsBox.value);
    const scaling = parseFloat(scalingBox.value);

    switch (fractalSelectionBox.value) {
        case "tree":
            const result = Module.treeSimulate(iterations, canvas.height, scaling);
            draw(result);
            break;
    }
}

button.addEventListener("click", event => {
    fractalSelect(Module)
});

createModule().then((mod) => {
    Module = mod;
    const result = Module.treeSimulate(4, canvas.height, 0.5);
    draw(result);
});