
/**
 * Función que extrae una carta del deck
 * @param {array<string>} deck ejemplo: ['H', 'S', 'C', 'D']
 * @returns {<string>} retorna una carta (string); ejemplo: 'JS'
 */



  const pedirCarta = (deck) =>{

    if(!deck || deck.length === 0){
        throw 'No quedan cartas en el deck';
    }

    return deck.pop();

}

export default pedirCarta;