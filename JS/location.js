// Creating squares for the landing page animation
let container = document.querySelector('.container');

let k = 1;
for (let i = 0; i < 5; i++)
{
    for (let j = 0; j < 5; j++)
    {
        let dot = document.createElement('div');
        dot.classList.add('element');
        if ((i % 2 != 0) && (j % 2 == 0)) dot.classList.add('element2');
        else if ((i % 2 == 0) && (j % 2 != 0)) dot.classList.add('element2');
        else 
        { 
            dot.classList.add('pic' + k);
            k++;
        }
        container.appendChild(dot);
    }
}

// Loader
var loader = document.getElementById('loader');

// Splash Screen
var splash = document.getElementById('splash');
var intro = document.getElementById('intro');
var logo = document.getElementById('logo');
var logoGraphic = document.getElementById('logoGraphic');

window.addEventListener("load", function() {
    loader.style.display = 'none';
    splash.style.height = '100vh';
    intro.style.display = 'flex';
    logo.style.animationName = 'fadeUp';
    logoGraphic.style.animationName = 'fadeUp';
    intro.style.animationName = 'slideUp';
    setInterval(deactivateSplash, 1500);
});

function deactivateSplash() {
    splash.style.height = '0';
    intro.style.display = 'none';
    document.getElementById('body').style.overflowY = 'scroll';
}  

// Get the button
let mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}