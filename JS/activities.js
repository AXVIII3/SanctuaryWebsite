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
    splash.style.display = 'none';
    intro.style.display = 'none';
    document.getElementById('body').style.overflowY = 'scroll';
}