var elPokemonList = document.querySelector('.js-pokemon-list');


/* ============================
First Homaki version
============================ */

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


/* ========================================
Second ForEach advanced, functional version
=========================================== */





















{
  /* <li class="col-12 col-sm-4 d-flex flex-column align-items-center p-2">
  <img src="http://www.serebii.net/pokemongo/pokemon/001.png" alt="Pokemon picture" width="150" height="150">
  <p>Bulbasaur</p>
  <p>Grass, Poison</p>
  </li> */
}