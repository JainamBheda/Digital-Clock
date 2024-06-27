setInterval(()=>{
let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let ampm=document.getElementById('ampm');

let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
// let am=h >= 12 ? "PM":"AM";
let am = h >= 12 ? "PM" : "AM";

hours.innerHTML=h + "<br><span>Hours</span>";
minutes.innerHTML=m + "<br><span>mins</span>";
seconds.innerHTML=s + "<br><span>secs</span>";
ampm.innerHTML=am;

let hou=document.getElementById('hou');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

let hourdots=document.querySelector('.hourdots');
let mindots=document.querySelector('.mindots');
let secdots=document.querySelector('.secdots');

hou.style.strokeDashoffset= 440- (440*h) /12;
min.style.strokeDashoffset= 440- (440*m) /60;
sec.style.strokeDashoffset= 440- (440*s) /60;

if (h>12){
    h= h-12;
}
h=(h<10) ? "0" + h: h;
m=(m<10) ? "0" + m: m;
s=(s<10) ? "0" + s: s;
hourdots.style.transform=`rotate(${h*30}deg)`;
mindots.style.transform=`rotate(${m*6}deg)`;
secdots.style.transform=`rotate(${s*6}deg)`;
})
