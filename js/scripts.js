// Select html element
var elPokemonList = $_('.js-pokemon-list');

// Empty the element
elPokemonList.innerHTML = '';


/* =======================================================
First Homaki version
======================================================= */

/* for (var i = 0; i < pokemons.length; i++) {

  var elNewLi = document.createElement('li');
  elNewLi.setAttribute('class', 'col-12 col-sm-4 border d-flex flex-column align-items-center list-group-item list-group-item-action p-2');

  var elNewImg = document.createElement('img');
  elNewImg.setAttribute('src', `${pokemons[i].img}`);
  elNewImg.setAttribute('width', 150);
  elNewImg.setAttribute('height', 150);
  elNewLi.appendChild(elNewImg);

  var elNewPName = document.createElement('p')
  elNewPName.textContent = pokemons[i].name;
  elNewPName.setAttribute('class', 'h5 font-weight-bold')
  elNewLi.appendChild(elNewPName);

  var elNewPType = document.createElement('p')
  elNewPType.textContent = pokemons[i].type.join(', ');
  elNewLi.appendChild(elNewPType);

  elPokemonList.appendChild(elNewLi);
} */


/* =========================================================
Second ForEach advanced, functional version
========================================================= */


// ForEach Loop to show pokemons
pokemons.forEach(function (pokemon) {

  // Create li
  var elNewLi = createPokemonlEl('li', 'col-12 col-sm-4 border d-flex flex-column align-items-center list-group-item list-group-item-action p-2');

  // Create Img
  var elNewImg = createPokemonlEl('img');
  elNewImg.setAttribute('src', pokemon.img);
  elNewImg.setAttribute('width', 150);
  elNewImg.setAttribute('height', 150);

  // Create p for name
  var elNewPName = createPokemonlEl('p', 'h5 font-weight-bold', pokemon.name);

  // Create p for type
  var elNewPType = createPokemonlEl('p', '', pokemon.type.join(', '));


  // Append all
  elPokemonList.appendChild(elNewLi);
  elNewLi.appendChild(elNewImg);
  elNewLi.appendChild(elNewPName);
  elNewLi.appendChild(elNewPType);

});