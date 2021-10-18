let baseUrl = 'http://www.omdbapi.com/?apikey=cdd80856';

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', event => {
        event.preventDefault();
        document.getElementById('containerID').innerHTML = null;
        let searchedTerm = document.getElementById('inputTitle').value;
        console.log(searchedTerm);
        let url = baseUrl + `&s=${searchedTerm}`;
        fetchMovie(url).then(result => {
            let resultingData = result.Search;
            console.log(resultingData);
            for (let el of resultingData) {
                let card = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${el.Poster}" class="card-img" alt="...">
                    </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${el.Title}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">$el.Year</small></p>
                            </div>
                        </div>
                    </div>
                </div>`
                document.getElementById('containerID').insertAdjacentHTML("beforeend", card);
                console.log(el);
                console.log(el.Poster);
                console.log(el.Title);
                console.log(el.Type);
                console.log(el.Year);
            }
        });
    });
};
async function fetchMovie(url) {
    let response = await fetch(url);
    return await response.json();
}