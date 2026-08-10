let buttons = document.querySelectorAll("button");
let labels = document.querySelectorAll("label");


buttons.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.textContent != "+") {
            event.target.style.backgroundColor = "hsl(293, 65%, 60%)";
            event.target.textContent = "+";
            event.target.parentElement.nextElementSibling.style.display = "none";
        } else {
            event.target.style.backgroundColor = "hsl(292, 42%, 14%)";
            event.target.textContent = "-";
            event.target.parentElement.nextElementSibling.style.display = "inline";
        }
    })

    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(293, 65%, 30%)";
    })

    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(293, 65%, 60%)";
    })
})

labels.forEach(label => {
    label.addEventListener("mouseover", event => {
        event.target.style.color = "hsl(293, 65%, 60%)";
    })

    label.addEventListener("mouseout", event => {
        event.target.style.color = "hsl(292, 42%, 14%)";
    })
})