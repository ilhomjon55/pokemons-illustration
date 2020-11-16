// Function to select elements
var $_ = function (selector, node = document) {
  return node.querySelector(selector);
}

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
}


// Special function to create element
var createPokemonlEl = function (tag, className) {
  var elNew = document.createElement(tag);
  elNew.setAttribute('class', className);

  return elNew;
}