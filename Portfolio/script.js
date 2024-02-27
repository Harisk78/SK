let nav = document.getElementById("nav");
let ham = document.getElementById("menu");
let close = document.getElementById("close");
let sec = document.getElementById("sec");


ham.addEventListener("click",()=>{
    nav.classList.add('nav-show');
    ham.classList.add('menu-slide');
    sec.classList.add('section-slide');
});
close.addEventListener("click",()=>{
    nav.classList.remove('nav-show');
    ham.classList.remove('menu-slide');
    sec.classList.remove('section-slide');
})