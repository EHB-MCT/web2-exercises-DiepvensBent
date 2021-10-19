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


    })