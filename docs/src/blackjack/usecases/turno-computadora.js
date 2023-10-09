import pedirCarta from "./pedir-carta";
import crearCarta from "./crear-carta";
import asignarPuntos from "./asignar-puntos";
import determinarGanador from "./determinar-ganador";


/**
 * Turno de la IA
 * @param {number} puntosASuperar puntos que la IA necesita para ganar
 * @param {array<string></string>} deck 
 * @param {number} turno 
 * @param {HTMLElement} divCartasJugador 
 * @param {number} puntosJugadores 
 * @param {HTMLElement} puntosHTML 
 */

 const turnoIA = (puntosASuperar, deck, turno, divCartasJugador, puntosJugadores, puntosHTML) =>{

    if(!puntosASuperar) throw new Error ('puntosASuperar son necesarios');
    if(!deck) throw new Error ('necesario deck');
   
      
    let puntosComputadora = 0;
    
    do{
        const carta = pedirCarta(deck);

        crearCarta(carta, turno, divCartasJugador);

        puntosComputadora = asignarPuntos(carta, turno, puntosJugadores, puntosHTML);
    
    }
    while((puntosComputadora < puntosASuperar) && (puntosASuperar < 22));

   
    determinarGanador(puntosASuperar, puntosComputadora);

}

export default turnoIA;
