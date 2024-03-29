let time = "00-00-00"
const intervalID = setInterval(updateTime, 1000);

function updateTime(){
    const date = new Date();
    
    time = date.toLocaleTimeString();
    
    document.getElementById("demo1").innerHTML = date.toLocaleTimeString();
    document.getElementById("demo2").innerHTML = date.toLocaleTimeString();
    document.getElementById("demo3").innerHTML = date.toLocaleTimeString();
}

function checkCLick() {
  clearInterval(time1);
  clearInterval(time2);
  clearInterval(time3);
}
button.addEventListener("click", checkCLick);

function start(){
    var sec1 = 0;
    time1 = setInterval(()=>{
    timer.innerHTML = '00:'+sec1;
    sec1 ++;
  }, 1000) // each 1 second
}

function start2(){
    var sec2 = 0;
    time2 = setInterval(()=>{
    timer2.innerHTML = '00:'+sec2;
    sec2 ++;
  }, 1000) // each 1 second
}

function start3(){
    var sec3 = 0;
    time3 = setInterval(()=>{
    timer3.innerHTML = '00:'+sec3;
    sec3++;
  }, 1000) // each 1 second
}

function stop1(){
    clearInterval(time1);
    timer.innerHTML = "00:00";
        
}
function stop2(){
    clearInterval(time2);
    timer2.innerHTML = "00:00";
        
}
function stop3(){
    clearInterval(time3);
    timer3.innerHTML = "00:00";
        
}

