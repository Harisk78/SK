let body=document.getElementById('container');
let toggle=document.getElementById('but');
let head=document.getElementById('head');
let cart=document.getElementById('cart');

toggle.addEventListener('click',()=>{
    body.classList.toggle('active');
    head.classList.toggle('active');
})

cart.addEventListener('click',()=>{
    alert("Added succesfully");
})