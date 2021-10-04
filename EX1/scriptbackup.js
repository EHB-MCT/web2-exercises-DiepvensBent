"Use Strict";

window.onload = function () {
    console.log("loaded");
    let dishes = [];
    dishes.push({
        id: '1',
        name: 'Burger and french fries',
        price: 10
    }, {
        id: '2',
        name: 'Smos',
        price: 3
    }, {
        id: '3',
        name: 'Bitterbal',
        price: 1
    }, {
        id: '4',
        name: 'Frikandel',
        price: 2
    }, {
        id: '5',
        name: 'Pizza',
        price: 8
    });

    dishes.forEach(element => {
        let radio = `<input type="checkbox" id="${element.name}" name="options">
        <label for="${element.id}">${element.name}</label>`
        console.log(radio);
        document.getElementById('options').insertAdjacentHTML("afterend", radio);
    });

    document.getElementById("form").addEventListener('submit', event => {
        event.preventDefault();
        let orderDetails = {
            name: "",
            email: "",
            order: ""
        }
        orderDetails.name = document.getElementById('nameInput').value;
        orderDetails.email = document.getElementById('emailInput').value;
        let selectedOption = document.querySelector('input[name=options]:checked');
        orderDetails.order = selectedOption.id;

        printOrder(orderDetails);
    });
};

function printOrder(orderDetails) {
    let bericht = `<p>The order for the customer ${orderDetails.name} is the following:  ${orderDetails.order}. The customer may be notified by email: ${orderDetails.email}</p>`
    document.getElementById('message').innerHTML = bericht;
};

function calculatePrice() {
    let price = 0;
    dishes.forEach(element => {
        let isChecked = document.getElementById(element.name).checked;
        if (isChecked) {
            price = price + element.price;
        }
    });
    console.log(price);
};