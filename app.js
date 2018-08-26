/*

Domyslnie slider zaczyna sie na 1 dot i ma klase active
Co 5 sekund zmienia sie dot
Jest mozliwosc klikniecia na dot i wtedy kolejny bedzie kolejny

*/

'use strict';


// Adresy URL wszystkich obrazków
const backgrounds = [
  {
    url: './img/1.jpeg'
  },
  {
    url: './img/2.jpeg'
  },
  {
    url: './img/3.jpeg'
  }
];

// Elementy DOM
const slider = document.querySelector('.slider');
const dots = [...document.querySelectorAll('.dot')];

// Deklaracja identyfikatora i zmiennych pomocniczych
let id = 0;
let selectedIDtemp;
let selectedID;

// Nadanie EventListenerów każdej kropce
dots.forEach(function(dot) {
  let that = this;
  dot.addEventListener('click', change);
});

// Funkcja do usuwanie klasy .active każdej kropce
function removeActiveClass() {
  dots.forEach(function(dot) {
    dot.classList.remove('active');
  });
}

// Funkcja wywoływana po kliknięciu danej kropki
function change() {

  removeActiveClass();

  selectedIDtemp = this.id;
  selectedID = selectedIDtemp.slice(4, 5);
  id = parseInt(selectedID) - 1;
  slider.style.backgroundImage = `url(${backgrounds[id].url})`;
  dots[id].classList.add('active');

}

// Funkcja carousel jest wywoływana co trzy sekundy
function carousel() {

  // Usunięcie klasy .active z każdej kropki na samym początku wywołania funkcji
  removeActiveClass();

  if (id === 2) {
    id = 0;
    slider.style.backgroundImage = `url(${backgrounds[id].url})`;
    dots[id].classList.add('active');
  } else {
    id++;
    slider.style.backgroundImage = `url(${backgrounds[id].url})`;
    dots[id].classList.add('active');
  }

}

setInterval(carousel, 3000);
