"Use Strict";
let price = 0;
let dishes = [];
let allPreviousOrders = ["", ""];
console.log(allPreviousOrders);
if (localStorage.getItem("infiniteScrollEnabled") === null) {
    let localData = localStorage.getItem("");
    allPreviousOrders = JSON.parse(localData);
}
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

window.onload = function () {
    console.log("loaded");
    dishes.forEach(element => {
        let radio = `<input type="checkbox" id="${element.name}" name="options">
        <label for="${element.id}">${element.name}</label>`
        document.getElementById('options').insertAdjacentHTML("afterend", radio);
    });

    document.getElementById("form").addEventListener('submit', event => {
        event.preventDefault();
        printOrder();
    });

    document.getElementById("calculateButton").addEventListener('submit', event => {
        event.preventDefault();
        calculatePrice();
    });
};

function printOrder() {
    calculatePrice();
    let orderDetails = {
        name: "",
        email: "",
        order: []
    }
    orderDetails.name = document.getElementById('nameInput').value;
    orderDetails.email = document.getElementById('emailInput').value;
    dishes.forEach(element => {
        let isChecked = document.getElementById(element.name).checked;
        if (isChecked) {
            orderDetails.order.push(element.name);
        }
    });
    let orderMessage = `<p>The order for the customer ${orderDetails.name} is the following:  ${orderDetails.order}. The customer may be notified by email: ${orderDetails.email}. The order will cost ${price} euro.</p>`
    document.getElementById('message').innerHTML = orderMessage;
    localStorage.setItem('previousOrder', orderMessage);
};

function calculatePrice() {
    price = 0;
    dishes.forEach(element => {
        let isChecked = document.getElementById(element.name).checked;
        if (isChecked) {
            price = price + element.price;
        };
    });
    let priceMessage = `<h1>Price: ${price} euro.</h1>`;
    document.getElementById('priceText').innerHTML = priceMessage;
};