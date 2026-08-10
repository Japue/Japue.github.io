const textBox = document.getElementById("text-box");
const image = document.getElementById("pokemon-sprite");



function fetchData(){
    const search = textBox.value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(response => {
            if (!response.ok) {
                image.style.display = "none";
                throw new Error(`Pokemon ${search} not found`);
            }
            return response.json();
        })
        .then(data => {
            image.style.display = "block";
            image.src = data.sprites.front_default;
        })
        .catch(error => console.error(error));
}