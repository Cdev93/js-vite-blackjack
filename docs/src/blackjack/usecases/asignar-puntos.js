import valorCarta from "./valor-carta";

/**
 * Asigna el valor a una carta
 * @param {string} carta 
 * @param {number} turno 
 * @param {array<number>} puntosJugadores 
 * @param {HTMLElement} puntosHTML 
 * @returns {number} retorna los puntos de un jugador
 */

  const asignarPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {

    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];

}

export default asignarPuntos;