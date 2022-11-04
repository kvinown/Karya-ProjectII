let button = document.getElementById('button');
let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket');
let text = document.getElementById('text');
let desc = document.getElementById('desc');
let kepin =document.getElementById('kepin');

alert("Jika anda menggunakan HP, gunakan desktop site.");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -1 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    desc.style.marginBottom = value * 1 + 'px';
    kepin.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
});