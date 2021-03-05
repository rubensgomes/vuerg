(function() {
  'use strict'

  const navLinks = document.querySelectorAll('.nav-item');
  const menuToggle = document.getElementById('navbar-menu-items');
  //  use BootStrap 5 bootstrap.Collapse function
  const bsCollapse = new bootstrap.Collapse(menuToggle);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => { bsCollapse.toggle() })
  });

})()
