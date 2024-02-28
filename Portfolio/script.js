let nav = document.getElementById("nav");
let ham = document.getElementById("menu");
let close = document.getElementById("close");
let sec = document.getElementById("sec");
let Skills_list = document.getElementById("Skills-list");
let skills_nav_child = document.getElementById("skills-nav-child");

ham.addEventListener("click",()=>{
    nav.classList.add('nav-show');
    ham.classList.add('menu-slide');
    sec.classList.add('section-slide');
});
close.addEventListener("click",()=>{
    nav.classList.remove('nav-show');
    ham.classList.remove('menu-slide');
    sec.classList.remove('section-slide');
});
Skills_list.addEventListener("click",()=>{
    skills_nav_child.classList.toggle('dropdownshow');
    console.log(skills_nav_child);
})