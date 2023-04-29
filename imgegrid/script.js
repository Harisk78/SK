const slide = document.querySelectorAll('.slide')

slide.forEach(slide =>{
    slide.addEventListener('click', ()=> {
        removeActiveClasses()
        slide.classList.add('active')
    })
})
function removeActiveClasses(){
    slide.forEach(slide => {
        slide.classList.remove('active')
    })
}