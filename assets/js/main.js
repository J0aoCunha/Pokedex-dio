const pokemonlist = document.getElementById('pokemonList');
const proximoButton = document.getElementById('loadMore')

const maxRecords = 1281;
const limit = 10;
let offset = 0;


function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">   
            ${pokemon.types.map((type) => `<li class="type ${type}" >${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}"
            alt="${pokemon.name}">
        </div>
        </li>
        `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHTML).join('')
        pokemonlist.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

proximoButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordWithNextPage = offset + limit

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit)

        proximoButton.parentElement.removeChild(proximoButton)

    } else {
        loadPokemonItens(offset, limit)
    }

})

