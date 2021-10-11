import Team from "./team.js";

let pokémon = [];
let pokémonData = [];

let firstTeam = new Team



window.onload = function () {

    getData();
    console.log(pokémonData);
    setTimeout(printData, 5000);
}

function getData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(data => {
            pokémon = data.results;
            for (let element of pokémon) {
                fetch(element.url)
                    .then(response => response.json())
                    .then(data => {
                        pokémonData.push(data);
                    });
            };
        });
}

function printData() {
    for (let el of pokémonData) {
        let pokémonDiv = `<div class="card" style="width: 10rem; margin: 3px;">
        <img class="card-img-top" src="${el.sprites.front_shiny}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${el.name}</h5>
        <p class="card-text">${el.types[0].type.name}</p>
        <a href="#" id="${el.id}" class="btn btn-primary ">Add to team</a>
        </div>
        </div>`;

        document.getElementById('displayPokémon').insertAdjacentHTML("beforeend", pokémonDiv);
    };
};