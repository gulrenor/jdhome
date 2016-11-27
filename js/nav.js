// Globals
var mobileBreakpoint = 600 //in pixels
var navMenuDisplayType = 'flex'

nav = document.querySelector('nav > button');
nav.addEventListener('click', showMenu, false);

navMenu = document.querySelector('nav ul');

function refreshMenu() {
  if (window.innerWidth < mobileBreakpoint) {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = navMenuDisplayType;
  }
}

function showMenu() {
  if (navMenu.style.display == navMenuDisplayType) {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = navMenuDisplayType;
  }
}

window.onresize = refreshMenu;
