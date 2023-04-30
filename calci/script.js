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
}