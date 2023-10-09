
/**
 * Determina qué jugador gana
 * @param {number} puntosASuperar puntos que la IA debe igualar o superar
 * @param {null} puntosComputadora  puntuación de la IA
 */

  const determinarGanador = (puntosASuperar, puntosComputadora) =>{

    setTimeout(() =>{
        ((puntosASuperar <= 21) && (puntosASuperar > puntosComputadora || puntosComputadora > 21)) ? alert('Ganaste!') : alert('Perdiste...');
    }, 600);
}


export default determinarGanador;