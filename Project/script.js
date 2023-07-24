//LOGIN

function log(){
    let name=document.getElementById("uname").value;
    let pass=document.getElementById("upass").value;
    let ps='harisk@7824';
    if(name==''||name==null){
        alert("Enter UserName");
        return false;
    }
    else if(pass==''||pass==null){
        alert("Enter Password");
    }
    else if(pass!=ps){
        alert("Wrong password");
    }
    else if((pass!=''||pass!=null)&&(pass==ps)&&(name!=''||name!=null)){
        window.location = "http://127.0.0.1:5500/list.html";
    }
}

//REGISTER

function reg(){
    let name=document.getElementById("uname").value;
    let email=document.getElementById("uemail").value;
    let pass=document.getElementById("upass").value;
    let cpass=document.getElementById("cmpass").value;
    let age=document.getElementById("age");
    let tel=document.getElementById("tel");

    if(name==''||name==null||email==''||email==null||pass==''||pass==null||cpass==''||cpass==null||age==''||age==null||tel==''||tel==null){
        alert("Enter All The Needs");
        return false;
    }
    else if(pass!=cpass){
        alert("Password Missmatched");
        return false;
    }
    if(name!=''||name!=null&&email!=''||email!=null&&pass!=''||pass!=null&&cpass!=''||cpass!=null&&age!=''||age!=null&&tel!=''||tel!=null&&pass==cpass){
        window.location="http://127.0.0.1:5500/login.html";
    }
}



//Profile Icon-Div

function icon(){
    let icon=document.getElementById("person");
    let prodiv=document.getElementById("pro");
    icon.addEventListener("click",()=>{
        prodiv.classList.toggle("active");
    });
}
icon();

//image-grid-off

function offimage(){
    let off=document.querySelectorAll(".img");

    off.forEach(off=> {
        off.addEventListener("click",()=>{
            remove();
            off.classList.add("active");
        })
    });
    function remove(){
        off.forEach(off => {
            off.classList.remove("active");
        });
    }
}   
offimage();