setInterval(() => {

let random = new Date;
let time = 
    random.getHours()+':'+random.getMinutes()+":"+random.getSeconds()+ 
    " on "+random.toLocaleDateString();
document.getElementById('time').innerHTML = time;
    
}, 1000);
