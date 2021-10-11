import Team from "./team.js";

let pokémon = [];
let pokémonData = [];

let firstTeam = new Team();





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

window.onload = function () {

    getData();
    console.log(pokémonData);
    setTimeout(printData, 5000);

}
function printData() {
    pokémonData.sort(function (a, b) {
        return a.id - b.id;
    });
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
    document.querySelectorAll('.btn').forEach(el => {
        el.addEventListener('click', e => {
            let id = e.target.id;
            let p = pokémonData.find(el => el.id == id);
            let message = firstTeam.addPokemon(p);
            describeTeam(message);
        })

    });
};

function describeTeam(m) {
    document.getElementById('team').innerHTML = firstTeam.describe();

    if (m) {
        let alertbox = document.createElement('div');
        alertbox.classList.add('alert');
        alertbox.setAttribute('role', 'alert');

        if (m.type == 'SUCCES') {
            alertbox.classList.add('alert-success');
        } else {
            alertbox.classList.add('alert-danger');
        }

        alertbox.innerText = m.value;

        document.getElementById('messages').innerHTML = '';
        document.getElementById('messages').appendChild(alertbox);

    }
}