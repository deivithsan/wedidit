const petals=document.getElementById('petals');
const sparkles=document.getElementById('sparkles');

function createPetal(){
 const p=document.createElement('div');
 p.className='petal';
 p.style.left=Math.random()*100+'vw';
 const d=8+Math.random()*8;
 p.style.animationDuration=d+'s';
 p.style.transform=`translateX(${(Math.random()-0.5)*50}px)`;
 petals.appendChild(p);
 setTimeout(()=>p.remove(),d*1000);
}
function createSpark(){
 const s=document.createElement('div');
 s.className='spark';
 s.style.left=Math.random()*100+'vw';
 const d=5+Math.random()*6;
 s.style.animationDuration=d+'s';
 sparkles.appendChild(s);
 setTimeout(()=>s.remove(),d*1000);
}
setInterval(createPetal,450);
setInterval(createSpark,350);

document.getElementById('startBtn').addEventListener('click',()=>{
 if(navigator.vibrate){navigator.vibrate(35);}
 alert('Te amoooooooooooooooo');
});
