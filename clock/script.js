let ampm=document.getElementById('ampm')

function displayTime(){
    let time= new Date();
    let hr=time.getHours();
    let min=zero(time.getMinutes());
    let sec=zero(time.getSeconds());
    if(hr > 12){
            hr=hr-12 
            ampm.innerHTML='PM'
    }
    document.getElementById('hour').innerHTML=zero(hr) 
    document.getElementById('min').innerHTML=min
    document.getElementById('sec').innerHTML=sec
    
}
function zero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,1000)

