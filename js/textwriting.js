var string = getHeroTitle();
var herotitel = string.split("");
var el = document.getElementById('herotitel');
(function animate() {
    herotitel.length > 0 ? el.innerHTML += herotitel.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();
