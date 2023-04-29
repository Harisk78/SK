//login form
function vfun(){
        var uname=document.forms["myform"]["uname"].value;
        var upswd=document.forms["myform"]["upswd"].value;

        if(uname==null || uname==""){
            document.getElementById ("errorbox").innerHTML="Enter the user name";
            return false;
        }
        if(upswd==null || upswd==""){
            document.getElementById ("errorbox").innerHTML="Enter the password";
            return false;
        }
        if(uname!='' && upswd!=''){
            alert("Login Succesfully...!");
        }
}
//register form
function vfun1(){
    var uname1=document.forms["myform1"]["uname1"].value;
    var uemail=document.forms["myform1"]["uemail"].value;
    var upswd1=document.forms["myform1"]["upswd1"].value;
    var upswd2=document.forms["myform1"]["upswd2"].value;
    
    if(uname1==null || uname1==""){
        document.getElementById ("errorbox").innerHTML="Enter User Name";
        return false;
    }
    if(uemail==null || uemail==""){
        document.getElementById("errorbox").innerHTML="Enter Email";
        return false;
    }
    if(upswd1==null || upswd1==""){
        document.getElementById("errorbox").innerHTML="Enter password";
        return false;
    }
    if(upswd2==null || upswd2==""){
        document.getElementById("errorbox").innerHTML="Confirm Your Password";
        return false;
    }
    if(upswd1 != upswd2){
        document.getElementById("errorbox").innerHTML="Password Missmatched";
        return false;
    }
    if(uname1 != '' && uemail != '' && upswd1 != '' && upswd2 != '' && upswd1 == upswd2){
        alert("Registered Succesfully...!");
    }

}    