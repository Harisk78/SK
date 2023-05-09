
function vfun(){
let idname=document.getElementById('name').value;
let idnum=document.getElementById('idnum').value;
let idmail=document.getElementById('email').value;
let pnum=document.getElementById('number').value;
        idcard(idname,idnum,idmail,pnum)
}

function idcard(name,id,mail,phone){
    name.innerHtml=name;
    id.innerHtml=id;
    mail.innerHtml=mail;
    phone.innerHtml=phone;
}