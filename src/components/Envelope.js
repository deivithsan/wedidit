export function createEnvelopeModal() {
  return `
    <div id="envelopeModal" class="envelope-modal hidden" role="dialog" aria-modal="true" aria-labelledby="envelopeTitle">
      <div class="envelope-inner">
        <div class="envelope">
          <div class="cover"></div>
          <div class="letter">
            <div class="letter-content">
              <h3 id="envelopeTitle">Una carta para los <span id="ojitosTrigger" style="cursor:default;">ojitos</span> lindos de mi vida</h3>
              <p>Te amo como no he amado a nadie en mi vida, eres lo que nunca esperaba encontrar en toda mi vida,
              me fascina cuando sonries, cuando me miras con esos ojitos tan lindos, cuando me cantas,
              cuando me bailas, amo con mi vida la cancion que me dedicaste, cada
              segundo a tu lado es el mayor regalo que puedo recibir en mi vida, gracias por darme tanto,
              gracias por entregarme tanto de ti, gracias por hacerme sentir tan valioso para ti, gracias
              por soportar tantos problemas con tus padres, se que no me merezco nada de todo eso que das por
              mi y cada dia al despertar le agradezco muchisimo a la vida por que te tengo, por que tu existes
              y eres mi mujer, por que yo soy el hombre de una mujer tan unica e increible, por que yo nunca
              nunca pense que pudiera encontrar a alguien como tu, alguien tan fascinante, hermosa, sexy, 
              inteligente, divertida, fuerte, audaz, unica en todos tus sentidos, gracias en serio por haber
              soportado tanto para llegar a donde estamos hoy amor mio, tres meses ya? siento que te conoci ayer
              mi niña hermosa y se que no ha sido facil, se que han
              habido muchos problemas, mentiras a tu familia y discusiones, pero son muchisimo mas las 
              sonrisas, los besos, los abrazos, la felicidad, el amor que nos tenemos puede con todo y maaaaaas. 
              Gracias por darme tanta
              felicidad en estos primeros 100 dias de racha, para los 200 te actualizare esta carta, lo mismo para
              los 300, los 400 y asi
              sucesivamente hasta que te llame mi esposa y te devuelvas a leer cada carta por que no las borrare,
              las guardare en la pagina como tipo historial para que siempre que quieras te regreses a leer las
              palabras que dijo este bobo a los 300 dias o a los 1000 o a los 100, solo espero que mi cursileria 
              no te canse algun dia, se que me haz dicho que amas
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
                <img src="${import.meta.env.BASE_URL}images/both.jpeg" alt="Foto juntos" />
              </div>
              <div style="display:flex;gap:8px;justify-content:center;align-items:center">
                <button id="closeEnvelope" class="close-btn">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
