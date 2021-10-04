"Use Strict";

window.onload = function () {
    console.log("loaded");
    let dishes = [];
    dishes.push({
        id: '1',
        name: 'Burger and french fries',
        price: '10'
    }, {
        id: '2',
        name: 'Smos',
        price: '3'
    }, {
        id: '3',
        name: 'Bitterbal',
        price: '5'
    });
    dishes.forEach(element => {
        let radio = `<input type="radio" id="${element.name}" name="options">
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
        let selectedOptions = document.querySelector('input[name=options]:checked');
        orderDetails.order = selectedOptions.id;
        console.log(selectedOptions.id);


        // orderDetails.order = document.getElementById('orderInput').value;
        // console.log(orderDetails.name, orderDetails.email, orderDetails.order);
        printOrder(orderDetails);
    });
};

function printOrder(orderDetails) {
    let bericht = `<p>The order for the customer ${orderDetails.name} is the following:  ${orderDetails.order}. The customer may be notified by email: ${orderDetails.email}</p>`
    document.getElementById('message').innerHTML = bericht;
}