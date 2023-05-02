let ampm=document.getElementById('ampm')
let m_seconds=0;

function displayTime(){
    let time= new Date();
    let hr=time.getHours();
    let min=zero(time.getMinutes());
    let sec=zero(time.getSeconds());
    if(hr > 12){
            hr=hr-12 
            ampm.innerHTML='PM'
    }
    document.getElementById('hour').innerHTML=zero(hr);
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
    var milli_seconds=document.getElementById("milli");
    if(m_seconds==0){
        milli_seconds.innerHTML="00";
    }
    else if(m_seconds<=9){
        milli_seconds.innerHTML="0"+m_seconds;
    }
    else{
        if(m_seconds==100){
            m_seconds=0;
        }
        milli_seconds.innerHTML=m_seconds;   
    }
    m_seconds++;
}
function zero(num){
    return num<10?"0"+num:num;
}
setInterval(displayTime,10);

