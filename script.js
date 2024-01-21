let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

setInterval(()=>{
    let day = new Date();
    let hr = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();
    let hrotate = (30*hr)+(min/2);
    let mrotate = 6*min;
    let srotate = 6*sec;

    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;
})

let moon = document.getElementById("moon");
let gate = document.getElementById("gate");
let ghost = document.getElementById("ghost");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    moon.style.top = value + 0.05 + 'px';
    let scale = 1 + value / 1000;
    scale = Math.min(scale, 2);

    ghost.style.transform = 'scale(' + scale + ')';
    gate.style.transform = 'translateY(' + value * 0.5 + 'px)';
})