setInterval(showtime,1000)
function showtime() {
const Time = new Date();
let hours = Time.getHours();
let minutes = Time.getMinutes();
let seconds = Time.getSeconds();
let am_pm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
const currentTime = hours +":"+ minutes +":"+ seconds + " "+ am_pm;
document.querySelector('#clock').innerHTML=currentTime;
}
showtime();