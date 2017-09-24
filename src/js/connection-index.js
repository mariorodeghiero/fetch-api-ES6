const url = 'https://mariorodeghiero.herokuapp.com/';
const obj = [];

fetch(url)
    .then(blob => blob.json())
    .then(data => obj.push(...data))

function findMatches(wordToMach, obj) {
    return obj.filter(place => {

        const regex = new RegExp(wordToMach, 'gi');
        return place.name.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, obj);
    const html = matchArray.map(place => {
        return `
                <li>${place.name} ${place.age} ${place.cpf}</li>
                `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

searchInput.addEventListener("input", displayMatches);
suggestions.addEventListener("keyup", displayMatches);