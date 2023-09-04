
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


pokeApi.getPokemons().then((Pokemons = []) => {
    pokemonlist.innerHTML += Pokemons.map(convertPokemonToHTML).join('')
})
