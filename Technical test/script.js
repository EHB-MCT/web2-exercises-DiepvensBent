fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=966c67d47e7545acbb794c9dda82b8d6&ingredients=apples,+flour')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (let el of data) {
            let text = `<p>title: ${el.title} likes: ${el.likes}</p>
            <br>`;
            console.log(text);
            document.getElementById('div').insertAdjacentHTML("beforeend", text);
        }
    });
fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDWwfLlV1EXVjvUnu1p0CvWVsdOMNC9-rA')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //billing not yet enabled request is in review
    })