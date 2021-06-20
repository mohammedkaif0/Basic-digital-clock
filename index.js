setInterval(showtime,1000)
function showtime() {
const Time = new Date();
let hours = Time.getHours();
let minutes = Time.getMinutes();
let seconds = Time.getSeconds();
let am_pm="AM";
if(hours < 12){
    hours-=12;
    am_pm="PM";
}
if(hours===0){
    hours =12;
    hours="AM";
}
const currentTime = hours +":"+ minutes +":"+ seconds + " "+ am_pm;
document.querySelector('#clock').innerHTML=currentTime;
}
showtime();