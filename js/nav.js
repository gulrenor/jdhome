nav = document.querySelector('nav > button');
nav.addEventListener('click', showMenu, false);

navMenu = document.querySelector('nav ul');

function refreshMenu() {
  if (window.innerWidth < 480) {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'flex';
  }
}

function showMenu() {
  if (navMenu.style.display == 'flex') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'flex';
  }
}

window.onresize = refreshMenu;
