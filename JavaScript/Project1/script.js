// for time
let a,time,date;
setInterval(() => {
    

a=new Date();
time =a.getHours()+" : "+a.getMinutes()+" : "+a.getSeconds();
date= a.toLocaleDateString();
document.getElementById('time').innerHTML=time ;
document.getElementById('date').innerHTML=date ;
}, 1000);