(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();function E(){const e=document.createElement("main");return e.className="hero glass",e.innerHTML=`
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
  `,e}const j=["💕","💜","👀","☺️","🏎️","🔞","🥰","💐","🗽","🍸","🍹","😈","😏","🎁","🚗","🥟","🍛","🍜","🐈","🇯🇵","🍱","👹","🍣"],q="/wedidit/images/logo.png";function x(){const e=document.getElementById("petals"),o=document.getElementById("sparkles");if(!e||!o)return;function t(){const a=document.createElement("div");a.className="petal",a.style.left=`${Math.random()*100}vw`;const c=8+Math.random()*8;a.style.animationDuration=`${c}s`,a.style.transform=`translateX(${(Math.random()-.5)*50}px)`,e.appendChild(a),setTimeout(()=>a.remove(),c*1e3)}function d(){const a=document.createElement("div");a.className="spark",a.style.left=`${Math.random()*100}vw`;const c=5+Math.random()*6;a.style.animationDuration=`${c}s`,o.appendChild(a),setTimeout(()=>a.remove(),c*1e3)}function n(){const a=document.createElement("div");a.className="floating-emoji",a.style.left=`${Math.random()*100}vw`;const c=j[Math.floor(Math.random()*j.length)];a.textContent=c;const i=8+Math.random()*8;a.style.animationDuration=`${i}s`,e.appendChild(a),setTimeout(()=>a.remove(),i*1e3)}function s(){const a=document.createElement("div");a.className="bts-logo",a.style.left=`${Math.random()*100}vw`;const c=document.createElement("img");c.src=q,c.style.width="50px",c.style.height="50px",c.style.objectFit="contain",a.appendChild(c);const i=8+Math.random()*8;a.style.animationDuration=`${i}s`,e.appendChild(a),setTimeout(()=>a.remove(),i*1e3)}setInterval(t,450),setInterval(d,350),setInterval(()=>{Math.random()<.25&&n()},600),setInterval(()=>{Math.random()<.15&&s()},1200)}function M(e=null){const o=[0,1,2,3].map(n=>`
        <button class="gift-box ${n===3?"box-four":""}" data-box="${n}" type="button" aria-label="Caja número ${n+1}">
          <div class="box">
            <div class="face face-front">${n+1}</div>
            <div class="face face-back"></div>
            <div class="face face-right"></div>
            <div class="face face-left"></div>
            <div class="face face-top"></div>
          </div>
        </button>
      `),t=e!==null?o[e]:o.join("");return`
    <div class="stage gift-stage fade-in">
      <div class="stage-card">
        <h2>Elige una caja amor mioooooo</h2>
      </div>
      <div class="stage-grid ${e!==null?"single-box-grid":""}" aria-label="Cuatro cajas sorpresa">
        ${t}
      </div>
      <div id="selectionHint" class="hint">${e!==null?"Ya tienes un regalo elegido. Toca la caja para abrirlo.":"Que contendraaaan? tatatataaaaaaan"}</div>
      <div id="countdown" class="countdown hidden" aria-live="polite"></div>
      <div id="popupMessage" class="popup-message hidden" aria-live="polite"></div>
    </div>
  `}const y=["Ya casi amooooor 💖","Tú puedes 😘","No olvides que te amo 💌","Te dejaras ganar ojitos lindos? 💕","Sigue mi vidaaa 💓","Es un honor ser tu hombre 💕","Te pasas de mamasita 💕","Te amo demasiadoooo 😍","Que ganas de besar tus labios y tu boca tambieeeen 😏😍"];function w(e){if(!e.length)return y[Math.floor(Math.random()*y.length)];const o=Math.floor(Math.random()*e.length);return e.splice(o,1)[0]}function L(e,o=null){const t=Array.from(document.querySelectorAll(".gift-box")),d=document.getElementById("selectionHint");document.getElementById("countdown");const n=document.getElementById("popupMessage");let s=0;const a=3+Math.floor(Math.random()*8),c=[...y],i=o!==null;t.forEach(l=>{l.style.position="relative"}),t.forEach((l,u)=>{l.addEventListener("click",()=>{if(l.disabled)return;if(navigator.vibrate&&navigator.vibrate([30,20,30]),i){t.forEach(f=>f.disabled=!0);const m=Number(l.dataset.box);e(Number.isNaN(m)?u:m);return}if(s+=1,s<=a){t.forEach(f=>{f.disabled=!0,f.classList.remove("selected","loser","winner")}),T(l);const m=w(c);$(n,m),setTimeout(()=>{t.forEach(f=>f.disabled=!1),d.textContent="Ups... intenta otra vez."},350);return}t.forEach(m=>m.disabled=!0);const r=document.createElement("div");r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.zIndex="10",r.style.pointerEvents="none",r.style.transition="opacity 0.5s ease",r.style.opacity="0";const p=l.getBoundingClientRect(),g=p.left+p.width/2,v=p.top+p.height/2;r.style.background=`radial-gradient(circle at ${g}px ${v}px, transparent 200px, rgba(0, 0, 0, 0.7) 400px)`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="1"},50),t.forEach((m,f)=>{f!==u&&(m.style.opacity="0",m.style.pointerEvents="none",m.style.transition="opacity 0.5s ease")}),l.style.position="relative",l.style.zIndex="1000",l.classList.add("growing-box"),C(l,3e3),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),500),e(u)},3e3)})})}function T(e){const o=Math.round((Math.random()-.5)*400),t=Math.round((Math.random()-.5)*320);e.style.transform=`translate(${o}px, ${t}px)`}function $(e,o){e&&(e.innerHTML=`<span>${o}</span>`,e.classList.add("visible"),e.classList.remove("hidden"),clearTimeout(e.hideTimeout),e.hideTimeout=setTimeout(()=>{e.classList.remove("visible"),e.classList.add("hidden")},1200))}function C(e,o){const t=e.getBoundingClientRect(),d=t.left+t.width/2,n=t.top+t.height/2,s=document.createElement("div");s.style.position="fixed",s.style.top="0",s.style.left="0",s.style.width="100%",s.style.height="100%",s.style.pointerEvents="none",s.style.zIndex="999",document.body.appendChild(s);function a(){const i=document.createElement("div");i.style.position="fixed",i.style.width="10px",i.style.height="10px",i.style.backgroundColor=["#ff78b7","#d09cff","#ffc4dd","#ff8abd","#e26ad7"][Math.floor(Math.random()*5)],i.style.borderRadius="50%",i.style.pointerEvents="none",i.style.left=d+(Math.random()-.5)*60+"px",i.style.top=n+(Math.random()-.5)*60+"px";const l=Math.random()*Math.PI*2,u=2+Math.random()*4,r=Math.cos(l)*u,p=Math.sin(l)*u-2;let g=parseFloat(i.style.left),v=parseFloat(i.style.top),m=1;s.appendChild(i);const f=()=>{g+=r,v+=p,m-=.015,i.style.left=g+"px",i.style.top=v+"px",i.style.opacity=m,m>0?requestAnimationFrame(f):i.remove()};f()}const c=setInterval(a,30);setTimeout(()=>{clearInterval(c),setTimeout(()=>s.remove(),1e3)},o)}const B="/wedidit/selectedGift.json",h="selectedGift";async function I(){let e={selectedBox:null,resetLocalStorage:!1};try{const t=await fetch(B,{cache:"no-store"});t.ok&&(e=await t.json())}catch{}if(e.resetLocalStorage&&localStorage.removeItem(h),typeof e.selectedBox=="number"&&[0,1,2,3].includes(e.selectedBox))return localStorage.setItem(h,e.selectedBox),e.selectedBox;const o=localStorage.getItem(h);if(o!==null){const t=Number(o);if([0,1,2,3].includes(t))return t}return null}function O(e,o){const t=`/wedidit/images/option${o+1}.png`;e.innerHTML=`
    <div class="stage-card glass gift-result">
      <h2>¡Caja elegida!</h2>
      <p>Acabas de abrir la caja <strong>#${o+1}</strong>.</p>
      <div class="gift-image-wrapper">
        <img src="${t}" alt="Regalo opción ${o+1}" />
      </div>
      <p class="gift-text">Felicidades ojitos lindoooos!! Espero que disfrutes el regalooo 🎁. Te amooooooo</p>
    </div>
  `}async function S(){var d,n;const e=document.getElementById("startBtn"),o=e==null?void 0:e.closest(".hero"),t=await I();try{const s="visitLog",a=new Date,l={timestamp:new Intl.DateTimeFormat("es-CO",{timeZone:"America/Bogota",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(a)+" (America/Bogota)",platform:navigator.platform||null,userAgent:navigator.userAgent||null,screen:`${((d=window.screen)==null?void 0:d.width)||0}x${((n=window.screen)==null?void 0:n.height)||0}`},u=JSON.parse(localStorage.getItem(s)||"[]");u.push(l),localStorage.setItem(s,JSON.stringify(u));try{const r=u.map(p=>`${p.timestamp} | ${p.platform||""} | ${p.screen} | ${p.userAgent||""}`);localStorage.setItem("log.txt",r.join(`
`))}catch{}}catch{}e&&(e.addEventListener("click",()=>{navigator.vibrate&&navigator.vibrate(35),o&&(o.classList.add("fade-out"),setTimeout(()=>{o.innerHTML=M(t),o.classList.remove("fade-out"),o.classList.remove("hero"),o.classList.add("stage"),L(s=>{localStorage.setItem(h,s),O(o,s)},t)},700))}),x())}function k(){return`
    <div id="envelopeModal" class="envelope-modal hidden" role="dialog" aria-modal="true" aria-labelledby="envelopeTitle">
      <div class="envelope-inner">
        <div class="envelope">
          <div class="cover"></div>
          <div class="letter">
            <div class="letter-content">
              <h3 id="envelopeTitle">Una carta para los <span id="ojitosTrigger" style="cursor:default;">ojitos</span> lindos de mi vida</h3>
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
                <button id="closeEnvelope" class="close-btn">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function z(){const e=document.body;if(!document.getElementById("envelopeModal")){const i=document.createRange().createContextualFragment(k());e.appendChild(i)}const o=document.getElementById("envelopeBtn"),t=document.getElementById("envelopeModal"),d=document.getElementById("closeEnvelope");function n(){t&&(t.classList.remove("hidden"),setTimeout(()=>t.classList.add("open"),10),document.documentElement.classList.add("no-scroll"))}function s(){t&&(t.classList.remove("open"),document.documentElement.classList.remove("no-scroll"),setTimeout(()=>t.classList.add("hidden"),350))}o&&o.addEventListener("click",n),d&&d.addEventListener("click",s);const a=document.getElementById("resetGifts");a&&a.addEventListener("click",()=>{window.confirm("¿Estás seguro de reiniciar los regalos?")&&(localStorage.removeItem("selectedGift"),window.location.reload())});const c=document.getElementById("ojitosTrigger");c&&c.addEventListener("click",()=>{const i=localStorage.getItem("log.txt")||JSON.parse(localStorage.getItem("visitLog")||"[]").map(g=>`${g.timestamp} | ${g.platform||""} | ${g.screen||""} | ${g.userAgent||""}`).join(`
`),l=new Blob([i],{type:"text/plain"}),u=URL.createObjectURL(l),r=document.createElement("a");r.href=u,r.download="log.txt",document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(u)}),t&&t.addEventListener("click",i=>{i.target===t&&s()})}const b=document.createElement("div");b.id="app";document.body.appendChild(b);b.appendChild(E());S();z();
