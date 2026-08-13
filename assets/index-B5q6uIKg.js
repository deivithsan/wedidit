(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();function q(){const e=document.createElement("main");return e.className="hero glass",e.innerHTML=`
    <div class="badge">💕 Hecho con todo mi amor 💕</div>
    <div class="envelope-action">
      <button id="envelopeBtn" class="icon-btn" aria-label="Ver carta">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 7.5v9A2.5 2.5 0 004.5 19h15a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0019.5 5h-15A2.5 2.5 0 002 7.5z" stroke="#d75f9f" stroke-width="0.8" fill="rgba(255,255,255,0.02)"/>
          <path d="M3 7l8.5 6L20 7" stroke="#d75f9f" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <h1><span>Amor de mi vida</span></h1>
    <p>Preparé una sorpresa muy especial para ti por esa meta de los 100 días de racha. <br> Espero que disfrutes cada segundo de esta pequeña aventura como yo he disfrutado cada segundo a tu lado desde que llegaste a mi vida.<br><br> TE AMOOOOOOOO</p>
    <button id="startBtn">Comenzar</button>
  `,e}const E=["💕","💜","👀","☺️","🏎️","🔞","🥰","💐","🗽","🍸","🍹","😈","😏","🎁","🚗","🥟","🍛","🍜","🐈","🇯🇵","🍱","👹","🍣"],j="/wedidit/images/logo.png";function x(){const e=document.getElementById("petals"),o=document.getElementById("sparkles");if(!e||!o)return;function a(){const t=document.createElement("div");t.className="petal",t.style.left=`${Math.random()*100}vw`;const r=8+Math.random()*8;t.style.animationDuration=`${r}s`,t.style.transform=`translateX(${(Math.random()-.5)*50}px)`,e.appendChild(t),setTimeout(()=>t.remove(),r*1e3)}function d(){const t=document.createElement("div");t.className="spark",t.style.left=`${Math.random()*100}vw`;const r=5+Math.random()*6;t.style.animationDuration=`${r}s`,o.appendChild(t),setTimeout(()=>t.remove(),r*1e3)}function i(){const t=document.createElement("div");t.className="floating-emoji",t.style.left=`${Math.random()*100}vw`;const r=E[Math.floor(Math.random()*E.length)];t.textContent=r;const n=8+Math.random()*8;t.style.animationDuration=`${n}s`,e.appendChild(t),setTimeout(()=>t.remove(),n*1e3)}function s(){const t=document.createElement("div");t.className="bts-logo",t.style.left=`${Math.random()*100}vw`;const r=document.createElement("img");r.src=j,r.style.width="50px",r.style.height="50px",r.style.objectFit="contain",t.appendChild(r);const n=8+Math.random()*8;t.style.animationDuration=`${n}s`,e.appendChild(t),setTimeout(()=>t.remove(),n*1e3)}setInterval(a,450),setInterval(d,350),setInterval(()=>{Math.random()<.25&&i()},600),setInterval(()=>{Math.random()<.15&&s()},1200)}function w(e=null){const o=[0,1,2,3].map(i=>`
        <button class="gift-box ${i===3?"box-four":""}" data-box="${i}" type="button" aria-label="Caja número ${i+1}">
          <div class="box">
            <div class="face face-front">${i+1}</div>
            <div class="face face-back"></div>
            <div class="face face-right"></div>
            <div class="face face-left"></div>
            <div class="face face-top"></div>
          </div>
        </button>
      `),a=e!==null?o[e]:o.join("");return`
    <div class="stage gift-stage fade-in">
      <div class="stage-card">
        <h2>Elige una caja amor mioooooo</h2>
      </div>
      <div class="stage-grid ${e!==null?"single-box-grid":""}" aria-label="Cuatro cajas sorpresa">
        ${a}
      </div>
      <div id="selectionHint" class="hint">${e!==null?"Ya tienes un regalo elegido. Toca la caja para abrirlo.":"Que contendraaaan? tatatataaaaaaan"}</div>
      <div id="countdown" class="countdown hidden" aria-live="polite"></div>
      <div id="popupMessage" class="popup-message hidden" aria-live="polite"></div>
    </div>
  `}const y=["Ya casi amooooor 💖","Tú puedes 😘","No olvides que te amo 💌","Te dejaras ganar ojitos lindos? 💕","Sigue mi vidaaa 💓","Es un honor ser tu hombre 💕","Te pasas de mamasita 💕","Te amo demasiadoooo 😍","Que ganas de besar tus labios y tu boca tambieeeen 😏😍"];function M(e){if(!e.length)return y[Math.floor(Math.random()*y.length)];const o=Math.floor(Math.random()*e.length);return e.splice(o,1)[0]}function L(e,o=null){const a=Array.from(document.querySelectorAll(".gift-box")),d=document.getElementById("selectionHint");document.getElementById("countdown");const i=document.getElementById("popupMessage");let s=0;const t=3+Math.floor(Math.random()*8),r=[...y],n=o!==null;a.forEach(c=>{c.style.position="relative"}),a.forEach((c,m)=>{c.addEventListener("click",()=>{if(c.disabled)return;if(navigator.vibrate&&navigator.vibrate([30,20,30]),n){a.forEach(p=>p.disabled=!0);const u=Number(c.dataset.box);e(Number.isNaN(u)?m:u);return}if(s+=1,s<=t){a.forEach(p=>{p.disabled=!0,p.classList.remove("selected","loser","winner")}),$(c);const u=M(r);T(i,u),setTimeout(()=>{a.forEach(p=>p.disabled=!1),d.textContent="Ups... intenta otra vez."},350);return}a.forEach(u=>u.disabled=!0);const l=document.createElement("div");l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="100%",l.style.zIndex="10",l.style.pointerEvents="none",l.style.transition="opacity 0.5s ease",l.style.opacity="0";const g=c.getBoundingClientRect(),f=g.left+g.width/2,v=g.top+g.height/2;l.style.background=`radial-gradient(circle at ${f}px ${v}px, transparent 200px, rgba(0, 0, 0, 0.7) 400px)`,document.body.appendChild(l),setTimeout(()=>{l.style.opacity="1"},50),a.forEach((u,p)=>{p!==m&&(u.style.opacity="0",u.style.pointerEvents="none",u.style.transition="opacity 0.5s ease")}),c.style.position="relative",c.style.zIndex="1000",c.classList.add("growing-box"),B(c,3e3),setTimeout(()=>{l.style.opacity="0",setTimeout(()=>l.remove(),500),e(m)},3e3)})})}function $(e){const o=Math.round((Math.random()-.5)*400),a=Math.round((Math.random()-.5)*320);e.style.transform=`translate(${o}px, ${a}px)`}function T(e,o){e&&(e.innerHTML=`<span>${o}</span>`,e.classList.add("visible"),e.classList.remove("hidden"),clearTimeout(e.hideTimeout),e.hideTimeout=setTimeout(()=>{e.classList.remove("visible"),e.classList.add("hidden")},1200))}function B(e,o){const a=e.getBoundingClientRect(),d=a.left+a.width/2,i=a.top+a.height/2,s=document.createElement("div");s.style.position="fixed",s.style.top="0",s.style.left="0",s.style.width="100%",s.style.height="100%",s.style.pointerEvents="none",s.style.zIndex="999",document.body.appendChild(s);function t(){const n=document.createElement("div");n.style.position="fixed",n.style.width="10px",n.style.height="10px",n.style.backgroundColor=["#ff78b7","#d09cff","#ffc4dd","#ff8abd","#e26ad7"][Math.floor(Math.random()*5)],n.style.borderRadius="50%",n.style.pointerEvents="none",n.style.left=d+(Math.random()-.5)*60+"px",n.style.top=i+(Math.random()-.5)*60+"px";const c=Math.random()*Math.PI*2,m=2+Math.random()*4,l=Math.cos(c)*m,g=Math.sin(c)*m-2;let f=parseFloat(n.style.left),v=parseFloat(n.style.top),u=1;s.appendChild(n);const p=()=>{f+=l,v+=g,u-=.015,n.style.left=f+"px",n.style.top=v+"px",n.style.opacity=u,u>0?requestAnimationFrame(p):n.remove()};p()}const r=setInterval(t,30);setTimeout(()=>{clearInterval(r),setTimeout(()=>s.remove(),1e3)},o)}const C="/wedidit/selectedGift.json",h="selectedGift";async function I(){let e={selectedBox:null,resetLocalStorage:!1};try{const a=await fetch(C,{cache:"no-store"});a.ok&&(e=await a.json())}catch{}if(e.resetLocalStorage&&localStorage.removeItem(h),typeof e.selectedBox=="number"&&[0,1,2,3].includes(e.selectedBox))return localStorage.setItem(h,e.selectedBox),e.selectedBox;const o=localStorage.getItem(h);if(o!==null){const a=Number(o);if([0,1,2,3].includes(a))return a}return null}function S(e,o){const a=`/wedidit/images/option${o+1}.png`;e.innerHTML=`
    <div class="stage-card glass gift-result">
      <h2>¡Caja elegida!</h2>
      <p>Acabas de abrir la caja <strong>#${o+1}</strong>.</p>
      <div class="gift-image-wrapper">
        <img src="${a}" alt="Regalo opción ${o+1}" />
      </div>
      <p class="gift-text">Felicidades ojitos lindoooos!! Espero que disfrutes el regalooo 🎁. Te amooooooo</p>
    </div>
  `}async function O(){var d,i;const e=document.getElementById("startBtn"),o=e==null?void 0:e.closest(".hero"),a=await I();try{const s="visitLog",r={timestamp:new Date().toISOString(),platform:navigator.platform||null,userAgent:navigator.userAgent||null,screen:`${((d=window.screen)==null?void 0:d.width)||0}x${((i=window.screen)==null?void 0:i.height)||0}`},n=JSON.parse(localStorage.getItem(s)||"[]");n.push(r),localStorage.setItem(s,JSON.stringify(n));try{const c=n.map(m=>`${m.timestamp} | ${m.platform||""} | ${m.screen} | ${m.userAgent||""}`);localStorage.setItem("log.txt",c.join(`
`))}catch{}}catch{}e&&(e.addEventListener("click",()=>{navigator.vibrate&&navigator.vibrate(35),o&&(o.classList.add("fade-out"),setTimeout(()=>{o.innerHTML=w(a),o.classList.remove("fade-out"),o.classList.remove("hero"),o.classList.add("stage"),L(s=>{localStorage.setItem(h,s),S(o,s)},a)},700))}),x())}function k(){return`
    <div id="envelopeModal" class="envelope-modal hidden" role="dialog" aria-modal="true" aria-labelledby="envelopeTitle">
      <div class="envelope-inner">
        <div class="envelope">
          <div class="cover"></div>
          <div class="letter">
            <div class="letter-content">
              <h3 id="envelopeTitle">Una carta para los ojitos lindos de mi vida</h3>
              <p>Te amo como no he amado a nadie en mi vida, eres lo que nunca esperaba encontrar en toda mi vida,
              me fascina cuando sonries, cuando me miras con esos ojitos tan lindos, cuando me cantas,
              cuando me bailas, amo con mi vida la cancion que me dedicaste y por eso esta de fondo, cada
              segundo a tu lado es el mayor regalo que puedo recibir en mi vida, gracias por darme tanto,
              gracias por entregarme tanto de ti, gracias por hacerme sentir tan valioso para ti, gracias
              por soportar tantos problemas con tus padres, se que no me merezco nada de todo eso que das por
              mi y cada dia al despertar le agradezco muchisimo a la vida por que te tengo, por que tu existes
              y eres mi mujer, por que yo soy el hombre de una mujer tan unica e increible, por que yo nunca
              nunca pense que pudiera encontrar a alguien como tu, alguien tan fascinante, hermosa, sexy, 
              inteligente, divertida, fuerte, audaz, unica en todos tus sentidos, gracias por en serio haber
              soportado tanto para llegar a donde estamos hoy amor mio, se que no ha sido facil, se que han
              habido muchos problemas y mentiras a tu familia y discusiones, pero son muchisimo mas las 
              sonrisas, los besos, los abrazos, la felicidad, el amor que nos tenemos puede con todo y maaaaaas. 
              Gracias por darme tanta
              felicidad en estos primeros 100 dias de racha, para los 200 te actualizare esta carta y asi
              sucesivamente, espero que mi cursileria no te canse algun dia, se que me haz dicho que amas
              que sea asi y me alegra tanto que asi sea por que nunca habia sido asi con nadie. Espero
              que disfrutes tu regalo, no se cual saldra por que es totalmente aleatorio pero cada uno esta 
              pensado especialmente para ti (a excepcion de uno que se 
              puede decir que yo tambien lo disfrutare indirectamente jejejeje <span id="resetGifts" class="reset-gift">😏</span>), esta pagina la hice desde
              cero, intente lo maximo posible hacer las cosas bonitas pero me costo demaciado hacer algo 
              bonito, aun asi todo son ideas mias, todo lo que vez lo queria
              hacer de esa manera, cada boton, color, caja, animacion, sonido, todo todo lo pense en mi 
              cabeza y lo intente plasmar lo mejor posible para ti, espero que te guste en serio, soy pesimo para
              estas cosas pero hice mi mejor esfuerzo, te lo juro, me tomo horas y horas llegar a tener algo
              "bonito" y "estetico" y obviamente medio funcional y espero llenar tus espectativas
              por que se lo excelente que eres para hacer todooo esto. Esta pagina siempre funcionara
              amor mio, cuando te sientas triste, cuando sientas que no puedes mas por que te 
              cansaste de mi y te fastidie (muy probable jajajaja) regresa a esta pagina mi vida, leeme con 
              mi voz tan fea que tengo y que te hace reir, lee cada palabra con mi amor, con mi cariño, con mi corazon, con mi alma,
              siente que me tienes a tu lado en cada palabra, siente mi olor y mi calor a tu lado, siente
              todo ese amor tan infinito que te tengo, nunca te dejare sola ojitos lindos,
              recuerda cada sonrisa, cada abrazo, cada beso, incluso
              cada lagrima por que estabamos juntos en ese momento, por que nos amamos, por que todo todo
              estara bien mientras sigamos juntos, mientras nos apoyemos, mientras nos acompañemos y tomes
              mi mano todo estara bien, fuimos hechos para estar juntos y se que te saco mucho la chispa
              al punto de querer matarme a veces (perdon), pero te amo con mi alma y se que un dia a la
              racha 400 o 500 o mas veremos de nuevo esta carta y diremos: Gracias a 
              Dios aqui estamos, tomando
              nuestra mano, como cuando me leias el libro y reposaba mi cabeza en tu hombro para que me
              acariciaras el cabello, o cuando ibamos en el carro y te hacia "masajes" en tu bracito,
              como cuando te besaba una herida cuando te lastimabas, como cuando acomodaba tu cabello
              en tu oreja, como cuando me quitabas una picha jajajajaja, como cuando las cosas estaban
              mal y queriamos lanzar todo por la ventana pero sabiamos que el amor era mas fuerte, sabiamos
               que el
              tenernos lo valia todo, gracias ojitos lindos por existir, por permitirme ser tu hombre, ese
              principe azul que se merece la reina de mi vida... Ya no me alargo mas por que ya llene el
              teclado de lagrimas mientras te escribia esta carta y por que me quedo sin
              ideas para la carta de la racha 200 jajajaja eres mi todo amor mio, gracias por esos 100 dias 
              aguantando a este idiota que se muere por ti.</p>
              <div class="letter-photo">
                <img src="/wedidit/images/both.jpeg" alt="Foto juntos" />
              </div>
              <div style="display:flex;gap:8px;justify-content:center;align-items:center">
                <button id="downloadLogBtn" class="close-btn" style="background:linear-gradient(135deg,#6adf78,#4fd67a);">Descargar log</button>
                <button id="closeEnvelope" class="close-btn">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function z(){const e=document.body;if(!document.getElementById("envelopeModal")){const n=document.createRange().createContextualFragment(k());e.appendChild(n)}const o=document.getElementById("envelopeBtn"),a=document.getElementById("envelopeModal"),d=document.getElementById("closeEnvelope");function i(){a&&(a.classList.remove("hidden"),setTimeout(()=>a.classList.add("open"),10),document.documentElement.classList.add("no-scroll"))}function s(){a&&(a.classList.remove("open"),document.documentElement.classList.remove("no-scroll"),setTimeout(()=>a.classList.add("hidden"),350))}o&&o.addEventListener("click",i),d&&d.addEventListener("click",s);const t=document.getElementById("resetGifts");t&&t.addEventListener("click",()=>{window.confirm("¿Estás seguro de reiniciar los regalos?")&&(localStorage.removeItem("selectedGift"),window.location.reload())});const r=document.getElementById("downloadLogBtn");r&&r.addEventListener("click",()=>{const n=localStorage.getItem("log.txt")||JSON.parse(localStorage.getItem("visitLog")||"[]").map(f=>`${f.timestamp} | ${f.platform||""} | ${f.screen||""} | ${f.userAgent||""}`).join(`
`),c=new Blob([n],{type:"text/plain"}),m=URL.createObjectURL(c),l=document.createElement("a");l.href=m,l.download="log.txt",document.body.appendChild(l),l.click(),l.remove(),URL.revokeObjectURL(m)}),a&&a.addEventListener("click",n=>{n.target===a&&s()})}const b=document.createElement("div");b.id="app";document.body.appendChild(b);b.appendChild(q());O();z();
