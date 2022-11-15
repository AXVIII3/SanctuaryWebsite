document.body.style.zoom = "110%" ;

// References to all the images
let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let forest = document.getElementById("forest");
let btn = document.getElementById("btn");
let rocks = document.getElementById("rocks");
let water = document.getElementById("water");

// Parallax
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    
    text.style.top = "0.9em" +(value * -0.5) + '%';
    bird1.style.top = (value * -1.5) + 'px';
    bird1.style.left = (value * 2) + 'px';
    bird2.style.top = (value * -1.5) + 'px';
    bird2.style.left = (value * -2) + 'px';
    btn.style.marginTop =( value * 1.5) + 'px';
    rocks.style.top = (value * -0.12) + 'px';
    forest.style.top = (value * 0.25) + 'px';
})

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