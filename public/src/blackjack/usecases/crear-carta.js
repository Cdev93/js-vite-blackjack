
/**
 * Crea la carta de cada jugador
 * @param {string} carta carta del jugador 
 * @param {number} turno jugador al que se refiere
 * @param {HTMLElement} divCartasJugador elemento html donde se colocan las cartas
 */



  const crearCarta = (carta, turno, divCartasJugador) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    divCartasJugador[turno].append(imgCarta);

}

export default crearCarta;