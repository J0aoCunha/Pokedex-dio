// Obtendo elementos HTML por ID
const pokemonlist = document.getElementById('pokemonList');
const proximoButton = document.getElementById('loadMore')

// Número máximo de registros e quantidade a ser carregada de cada vez
const maxRecords = 1281;
const limit = 10;
let offset = 0;

// Função para converter dados do Pokémon em HTML
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

// Função para carregar itens de Pokémon com base no deslocamento (offset) e limite (limit)
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHTML).join('')
        pokemonlist.innerHTML += newHtml
    })
}

// Inicialmente carregue os primeiros itens
loadPokemonItens(offset, limit)

// Adicione um ouvinte de evento para o botão "Próximo"
proximoButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordWithNextPage = offset + limit

    if (qtdRecordWithNextPage >= maxRecords) {
        // Se atingir o número máximo de registros, ajuste o limite
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit)

        // Remova o botão "Próximo" quando não houver mais registros a carregar
        proximoButton.parentElement.removeChild(proximoButton)

    } else {
        // Carregue mais itens de Pokémon
        loadPokemonItens(offset, limit)
    }
})