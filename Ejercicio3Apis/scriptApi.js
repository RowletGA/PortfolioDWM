
const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeMoves = document.querySelector('[data-poke-moves]');
const pokeStats = document.querySelector('[data-poke-stats]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeId = document.querySelector('[data-poke-id]');

const typeColors = {
  grass: '#78c850',
  electric: '#f8d030',
  normal: '#f8f8f8',
  fire: '#f08030',
  water : '#6890f0',
  ice : '#98d8d8',
  rock : '#b8a038',
  flying : '#a890f0',
  psyquic : '#f85888',
  ghost : '#705898',
  bug : '#a8b820',
  poison : '#a040a0',
  ground : '#e0c068',
  dragon : '#7038f8',
  steel : '#b8b8d0',
  fighting : '#c03028',
  default : '#6d6d4e'
};

const searchPokemon = event => {
  event.preventDefault();
  const { value } = event.target.pokemon;
  fetch	(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
    .catch(err => renderNotFound());
  }
const renderPokemonData = data => {
  const sprite = data.sprites.front_default;
  const { stats, types } = data;
 // console.log(data);
  pokeName.textContent = data.name;
  pokeImg.setAttribute('src', sprite);
  pokeId.textContent = `Nº ${data.id}`;
  setCardColor(types);
  renderPokemonTypes(types);
  renderPokemonStats(stats);
}
const setCardColor = types => {
  const colorOne = typeColors[types[0].type.name];
  const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
  pokeImg.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
  pokeImg.style.backgroundSize = '5px 5px';
  
}
const renderPokemonTypes = types => {
  pokeTypes.innerHTML = '';
  types.forEach(type => {
    const typeTextElement = document.createElement('div');
    typeTextElement.style.color = typeColors[type.type.name];
    typeTextElement.textContent = type.type.name;
    pokeTypes.appendChild(typeTextElement);
  });

  const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
      const statElement = document.createElement('div');
      const statElementName = document.createElement('div');
      const statElementAmount = document.createElement('div');
      statElementName.textContent = stat.stat.name;
      statElementAmount.textContent = stat.base_stat;
      statElement.appendChild(statElementName);
      statElement.appendChild(statElementAmount);
      pokeStats.appendChild(statElement);
    });
  }
  const renderNotFound = () => {
    pokeName.textContent = 'Pokemon no encontrado';
    pokeImg.setAttribute('src', 'https://i.imgur.com/vuW5qoF.png');
    pokeImg.style.background = '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}
}

  


/*Esta funcion saca un numero aleatorio entre 1 y 898 el cual usa para referenciar
 a un pokemon por numero consiguiendo que cada vez q se recargue la pagina devuela un 
 pokemon con sus respectivos datos */

function loadRandomPokemonInfo() {
    // Generar un número aleatorio entre 1 y 898 (cantidad de Pokémon válidos)
    const randomPokemonId = Math.floor(Math.random() * 1010) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`;

    $.ajax({
      url: url,
      method: 'GET',
      success: function(data) {
        const pokemonInfo = `
          <h2>${data.name}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p>Height: ${data.height} decimetres</p>
          <p>Weight: ${data.weight} hectograms</p>
          <p>Base experience: ${data.base_experience}</p>
          <p>Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
          <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
        `;
        $('#pokemon-info').html(pokemonInfo);
      },
      error: function(error) {
        console.log('Error:', error);
      }
    });
  }

  // Cargar la información de un Pokémon aleatorio al cargar la página
  loadRandomPokemonInfo();

