let startBtn = document.querySelector('.container .start-btn');
let pauseBtn = document.querySelector('.container .pause-btn');
let resetBtn = document.querySelector('.container .reset-btn');
let hour = min = sec = ms = "0" + 0,startTimer;

let start =()=>{
 startTimer = setInterval(()=>{
  ms++;
  ms = ms < 10 ? "0" + ms : ms;
  if(ms == 100){
    sec++;
    ms = "0"+ 0;
    sec = sec < 10 ? "0" + sec : sec;
  }
  if(sec ==60){
    min++;
    sec = "0" + 0;
    min = min < 10 ? "0" + min : min;        
  }
  if(min == 60){
    hour++;
    min = "0" + 0;
    hour = hour < 10 ? "0" + hour : hour;         
  }
putValue();
startBtn.style.display = 'none';
pauseBtn.style.display = 'block';
 },10)       
}

pauseBtn.addEventListener('click',()=>{
  clearInterval(startTimer); 
  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
});

resetBtn.addEventListener('click',()=>{
 hour = min = sec = ms = "0" + 0;
 clearInterval(startTimer);
 startBtn.style.display = 'block';
 pauseBtn.style.display = 'none';
 putValue();
})

let putValue =()=>{
document.querySelector('.timer .hour').innerHTML = hour;
document.querySelector('.timer .min').innerHTML = min;
document.querySelector('.timer .sec').innerHTML = sec;
document.querySelector('.timer .ms').innerHTML = ms     
}

startBtn.addEventListener('click',start)
