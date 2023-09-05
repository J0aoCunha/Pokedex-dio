
function convertPokemonToHTML(Pokemon) {
    return `
    <li class="pokemon ${Pokemon.type}">
    <span class="number">#${Pokemon.number}</span>
    <span class="name">${Pokemon.name}</span>

    <div class="detail">
        <ol class="types">   
        ${Pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
        </ol>
        <img src="${Pokemon.photo}"
        alt="${Pokemon.name}">
    </div>
    </li>
    `
}

const pokemonlist = document.getElementById('pokemonList');


pokeApi.getPokemons().then((Pokemons = []) => {
    const newHtml = Pokemons.map(convertPokemonToHTML).join('')
    pokemonlist.innerHTML = newHtml
})

//10:54