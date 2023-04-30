<<<<<<< HEAD
let output=document.getElementById("output")
alert("Welcome to my calculator...lets do math.!");
function display(num){
    output.value += num;
}
function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function Clear(){
    output.value= "";
}
function del(){
    output.value=output.value.slice(0,-1);
=======
let output=document.getElementById("output")

function display(num){
    output.value += num;
}
function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function Clear(){
    output.value= "";
}
function del(){
    output.value=output.value.slice(0,-1);
>>>>>>> 8d7b6b07f660cfd98a225b31999fb858597b838d
}