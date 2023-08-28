
function loadRandomPokemonInfo() {
    // Generar un número aleatorio entre 1 y 898 (cantidad de Pokémon válidos)
    const randomPokemonId = Math.floor(Math.random() * 898) + 1;
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
