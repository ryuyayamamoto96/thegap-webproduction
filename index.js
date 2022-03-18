const navopen = document.querySelector('#nav_toggle');
const nav = document.querySelector('nav')


navopen.addEventListener('click', function() {
    navopen.classList.toggle('active');
    nav.classList.toggle('show');
  });
  
