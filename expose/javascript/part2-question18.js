let d = new Date();
let time = d.toLocaleTimeString();
function func(time){console.log(time);}
setInterval(func, 1000, time);