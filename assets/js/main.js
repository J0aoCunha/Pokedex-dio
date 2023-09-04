const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?set=${offset}&limit=${limit}`;


function convertPokemonToHTML(pokemon) {
    return `
    <li class="pokemon">
    <span class="number"></span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            <li class="type"></li>
            <li class="type"></li>
        </ol>
        <img src="${pokemon.name}">
    </div>
    </li>
    `
}

const pokemonlist = document.getElementById('pokemonList');

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]
            pokemonlist.innerHTML += convertPokemonToHTML(pokemon);


        }
    })
    .catch((error) => console.error(error))

