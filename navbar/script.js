const hamburs=document.querySelector('.hamburs');
const nav=document.querySelector('ul');

hamburs.addEventListener('click' , ()=> {
    nav.classList.toggle('slide');
});