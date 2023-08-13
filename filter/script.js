let btn=document.querySelectorAll('.but');
let boxes=document.querySelectorAll('.box');
let input=document.getElementById('input');

input.addEventListener("keyup",(e)=>{  
    
    let inval=(e.target.value.toLowerCase().trim());
  
    boxes.forEach((box) => {
        let boxval=(box.dataset.item);
        if(boxval.includes(inval)){
            box.style.display='block';
        }
        else{
            box.style.display='none'
        }
    });

    btn.forEach((but)=>{
        but.classList.remove("clicked");
    });

    btn[0].classList.add('clicked');
})

/*Button Active*/
btn.forEach((but) => {
    but.addEventListener("click",()=>{
        removeEventListener();
        but.classList.add("clicked");
        let butval=but.dataset.filter;            
        let btnval=(but.dataset.filter);
        boxes.forEach((box) => {

            if(btnval=='all'){
                box.style.display='block';
            }

            else{
                let boxval=box.dataset.item;
                if(boxval.includes(butval)){
                    box.style.display='block';
                }
                else{
                    box.style.display='none';
                }
            }
        });
    });
});

function removeEventListener(){
    btn.forEach((but)=>{
        but.classList.remove("clicked");
    });
}