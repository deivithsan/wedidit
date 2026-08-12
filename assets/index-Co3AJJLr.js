(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();function E(){const e=document.createElement("main");return e.className="hero glass",e.innerHTML=`
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
  `,e}const q=["💕","💜","👀","☺️","🏎️","🔞","🥰","💐","🗽","🍸","🍹","😈","😏","🎁","🚗","🥟","🍛","🍜","🐈","🇯🇵","🍱","👹","🍣"],j="/images/logo.png";function M(){const e=document.getElementById("petals"),t=document.getElementById("sparkles");if(!e||!t)return;function a(){const o=document.createElement("div");o.className="petal",o.style.left=`${Math.random()*100}vw`;const r=8+Math.random()*8;o.style.animationDuration=`${r}s`,o.style.transform=`translateX(${(Math.random()-.5)*50}px)`,e.appendChild(o),setTimeout(()=>o.remove(),r*1e3)}function c(){const o=document.createElement("div");o.className="spark",o.style.left=`${Math.random()*100}vw`;const r=5+Math.random()*6;o.style.animationDuration=`${r}s`,t.appendChild(o),setTimeout(()=>o.remove(),r*1e3)}function n(){const o=document.createElement("div");o.className="floating-emoji",o.style.left=`${Math.random()*100}vw`;const r=q[Math.floor(Math.random()*q.length)];o.textContent=r;const i=8+Math.random()*8;o.style.animationDuration=`${i}s`,e.appendChild(o),setTimeout(()=>o.remove(),i*1e3)}function s(){const o=document.createElement("div");o.className="bts-logo",o.style.left=`${Math.random()*100}vw`;const r=document.createElement("img");r.src=j,r.style.width="50px",r.style.height="50px",r.style.objectFit="contain",o.appendChild(r);const i=8+Math.random()*8;o.style.animationDuration=`${i}s`,e.appendChild(o),setTimeout(()=>o.remove(),i*1e3)}setInterval(a,450),setInterval(c,350),setInterval(()=>{Math.random()<.25&&n()},600),setInterval(()=>{Math.random()<.15&&s()},1200)}function x(e=null){const t=[0,1,2,3].map(n=>`
        <button class="gift-box ${n===3?"box-four":""}" data-box="${n}" type="button" aria-label="Caja número ${n+1}">
          <div class="box">
            <div class="face face-front">${n+1}</div>
            <div class="face face-back"></div>
            <div class="face face-right"></div>
            <div class="face face-left"></div>
            <div class="face face-top"></div>
          </div>
        </button>
      `),a=e!==null?t[e]:t.join("");return`
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
  `}const y=["Ya casi amooooor 💖","Tú puedes 😘","No olvides que te amo 💌","Te dejaras ganar ojitos lindos? 💕","Sigue mi vidaaa 💓","Es un honor ser tu hombre 💕","Te pasas de mamasita 💕","Te amo demasiadoooo 😍","Que ganas de besar tus labios y tu boca tambieeeen 😏😍"];function L(e){if(!e.length)return y[Math.floor(Math.random()*y.length)];const t=Math.floor(Math.random()*e.length);return e.splice(t,1)[0]}function T(e,t=null){const a=Array.from(document.querySelectorAll(".gift-box")),c=document.getElementById("selectionHint");document.getElementById("countdown");const n=document.getElementById("popupMessage");let s=0;const o=3+Math.floor(Math.random()*8),r=[...y],i=t!==null;a.forEach(d=>{d.style.position="relative"}),a.forEach((d,p)=>{d.addEventListener("click",()=>{if(d.disabled)return;if(navigator.vibrate&&navigator.vibrate([30,20,30]),i){a.forEach(u=>u.disabled=!0);const m=Number(d.dataset.box);e(Number.isNaN(m)?p:m);return}if(s+=1,s<=o){a.forEach(u=>{u.disabled=!0,u.classList.remove("selected","loser","winner")}),w(d);const m=L(r);C(n,m),setTimeout(()=>{a.forEach(u=>u.disabled=!1),c.textContent="Ups... intenta otra vez."},350);return}a.forEach(m=>m.disabled=!0);const l=document.createElement("div");l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="100%",l.style.zIndex="10",l.style.pointerEvents="none",l.style.transition="opacity 0.5s ease",l.style.opacity="0";const f=d.getBoundingClientRect(),v=f.left+f.width/2,h=f.top+f.height/2;l.style.background=`radial-gradient(circle at ${v}px ${h}px, transparent 200px, rgba(0, 0, 0, 0.7) 400px)`,document.body.appendChild(l),setTimeout(()=>{l.style.opacity="1"},50),a.forEach((m,u)=>{u!==p&&(m.style.opacity="0",m.style.pointerEvents="none",m.style.transition="opacity 0.5s ease")}),d.style.position="relative",d.style.zIndex="1000",d.classList.add("growing-box"),B(d,3e3),setTimeout(()=>{l.style.opacity="0",setTimeout(()=>l.remove(),500),e(p)},3e3)})})}function w(e){const t=Math.round((Math.random()-.5)*400),a=Math.round((Math.random()-.5)*320);e.style.transform=`translate(${t}px, ${a}px)`}function C(e,t){e&&(e.innerHTML=`<span>${t}</span>`,e.classList.add("visible"),e.classList.remove("hidden"),clearTimeout(e.hideTimeout),e.hideTimeout=setTimeout(()=>{e.classList.remove("visible"),e.classList.add("hidden")},1200))}function B(e,t){const a=e.getBoundingClientRect(),c=a.left+a.width/2,n=a.top+a.height/2,s=document.createElement("div");s.style.position="fixed",s.style.top="0",s.style.left="0",s.style.width="100%",s.style.height="100%",s.style.pointerEvents="none",s.style.zIndex="999",document.body.appendChild(s);function o(){const i=document.createElement("div");i.style.position="fixed",i.style.width="10px",i.style.height="10px",i.style.backgroundColor=["#ff78b7","#d09cff","#ffc4dd","#ff8abd","#e26ad7"][Math.floor(Math.random()*5)],i.style.borderRadius="50%",i.style.pointerEvents="none",i.style.left=c+(Math.random()-.5)*60+"px",i.style.top=n+(Math.random()-.5)*60+"px";const d=Math.random()*Math.PI*2,p=2+Math.random()*4,l=Math.cos(d)*p,f=Math.sin(d)*p-2;let v=parseFloat(i.style.left),h=parseFloat(i.style.top),m=1;s.appendChild(i);const u=()=>{v+=l,h+=f,m-=.015,i.style.left=v+"px",i.style.top=h+"px",i.style.opacity=m,m>0?requestAnimationFrame(u):i.remove()};u()}const r=setInterval(o,30);setTimeout(()=>{clearInterval(r),setTimeout(()=>s.remove(),1e3)},t)}const I="/selectedGift.json",g="selectedGift";async function $(){let e={selectedBox:null,resetLocalStorage:!1};try{const a=await fetch(I,{cache:"no-store"});a.ok&&(e=await a.json())}catch{}if(e.resetLocalStorage&&localStorage.removeItem(g),typeof e.selectedBox=="number"&&[0,1,2,3].includes(e.selectedBox))return localStorage.setItem(g,e.selectedBox),e.selectedBox;const t=localStorage.getItem(g);if(t!==null){const a=Number(t);if([0,1,2,3].includes(a))return a}return null}function z(e,t){const a=`/images/option${t+1}.png`;e.innerHTML=`
    <div class="stage-card glass gift-result">
      <h2>¡Caja elegida!</h2>
      <p>Acabas de abrir la caja <strong>#${t+1}</strong>.</p>
      <div class="gift-image-wrapper">
        <img src="${a}" alt="Regalo opción ${t+1}" />
      </div>
      <p class="gift-text">Felicidades ojitos lindoooos!! Espero que disfrutes el regalooo 🎁. Te amooooooo</p>
    </div>
  `}async function O(){const e=document.getElementById("startBtn"),t=e==null?void 0:e.closest(".hero"),a=await $();e&&(e.addEventListener("click",()=>{navigator.vibrate&&navigator.vibrate(35),t&&(t.classList.add("fade-out"),setTimeout(()=>{t.innerHTML=x(a),t.classList.remove("fade-out"),t.classList.remove("hero"),t.classList.add("stage"),T(c=>{localStorage.setItem(g,c),z(t,c)},a)},700))}),M())}function k(){return`
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
                <img src="/images/both.jpeg" alt="Foto juntos" />
              </div>
              <button id="closeEnvelope" class="close-btn">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function S(){const e=document.body;if(!document.getElementById("envelopeModal")){const r=document.createRange().createContextualFragment(k());e.appendChild(r)}const t=document.getElementById("envelopeBtn"),a=document.getElementById("envelopeModal"),c=document.getElementById("closeEnvelope");function n(){a&&(a.classList.remove("hidden"),setTimeout(()=>a.classList.add("open"),10),document.documentElement.classList.add("no-scroll"))}function s(){a&&(a.classList.remove("open"),document.documentElement.classList.remove("no-scroll"),setTimeout(()=>a.classList.add("hidden"),350))}t&&t.addEventListener("click",n),c&&c.addEventListener("click",s);const o=document.getElementById("resetGifts");o&&o.addEventListener("click",()=>{window.confirm("¿Estás seguro de reiniciar los regalos?")&&(localStorage.removeItem("selectedGift"),window.location.reload())}),a&&a.addEventListener("click",r=>{r.target===a&&s()})}const b=document.createElement("div");b.id="app";document.body.appendChild(b);b.appendChild(E());O();S();
