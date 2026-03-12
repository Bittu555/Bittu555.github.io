var typed = new Typed(".typing",{

strings:[
"Java Backend Engineer",
],

typeSpeed:60,
backSpeed:40,
loop:true

});

// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});

