let baseUrl = 'http://www.omdbapi.com/?apikey=cdd80856';

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', event => {
        event.preventDefault();
        let searchedTerm = document.getElementById('inputTitle').value;
        console.log(searchedTerm);
        let url = baseUrl + `&s=${searchedTerm}`;
        fetchMovie(url).then(result => {
            let resultingData = result.Search;
            console.log(resultingData);
            for (let el of resultingData) {
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