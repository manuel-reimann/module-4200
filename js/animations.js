//custom cursor
const circle = document.querySelector('#circle');
const circleStyle = circle.style;

document.addEventListener('mousemove', e => {
  window.requestAnimationFrame(() => {
    circleStyle.top = `${ e.clientY - circle.offsetHeight/2 }px`;
    circleStyle.left = `${ e.clientX - circle.offsetWidth/2 }px`;
  });

});


//change the color of the cursor depending on background
const whiteAreas = document.querySelectorAll('#navi, #contact, #about')
const blackAreas = document.querySelectorAll('#home, #photo, #video')


for (i = 0; i < whiteAreas.length; i++) {
  whiteAreas[i].addEventListener('mousemove', s => {
    circle.style.backgroundColor = "black";
  });
}

for (i = 0; i < blackAreas.length; i++) {
  blackAreas[i].addEventListener('mousemove', s => {
    circle.style.backgroundColor = "white";
  });
}


//--------------------------Site Jump Function Navi -----------//
document.querySelector('.jump-photo').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ 
    left: 0, 
    top: window.innerWidth * 2,
    behavior: 'smooth' });
});

document.querySelector('.jump-video').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ 
    left: 0, 
    top: window.innerWidth * 3,
    behavior: 'smooth' });
});

document.querySelector('.jump-about').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ 
    left: 0, 
    top: window.innerWidth * 4,
    behavior: 'smooth' });
});

document.querySelector('.jump-contact').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ 
    left: 0, 
    top: window.innerWidth * 5,
    behavior: 'smooth' });
});


