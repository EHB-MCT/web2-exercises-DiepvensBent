"use strict";

let pokémon = [];
let pokémonData = [];



window.onload = function () {
    getData();
    console.log(pokémonData);
    console.log("pokémon data logged");
    setTimeout(printData, 5000);
    printData();
}

function getData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(data => {
            pokémon = data.results;
            console.log(pokémon);
            console.log("first");
            pokémon.forEach(element => {
                fetch(element.url)
                    .then(response => response.json())
                    .then(data => {
                        pokémonData.push(data);
                    });
            });
        });
    console.log(pokémonData);
    console.log("second");
}

function printData() {
    console.log("print data function started");
    console.log(pokémonData);

    for (let el of pokémonData) {
        let pokémonDiv = `<img src="" alt="">
        <p>Nr.${el.order}</p>
        <h3>${el.name}</h3>`;
        document.getElementById('displayPokémon').insertAdjacentHTML("afterend", pokémonDiv);
    };
};