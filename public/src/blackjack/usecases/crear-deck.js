 import _ from 'underscore';
 

 /**
  * Esta función crea un nuevo deck
  * @param {array<string>} palos ejemplo:  ['H', 'S', 'C', 'D']
  * @param {array<string>} otros ejemplo: ['J', 'Q', 'K', 'A']
  * @returns {array<string>} retorna el nuevo deck de cartas
  */
 
 
 const crearDeck = (palos, otros) => {


    if (!palos || palos.length === 0) throw new Error ('palos es obligatorio como array de string');
    if (!otros || otros.length === 0) throw new Error ('otros es obligatorio como array de string');
    

    let deck = [];

    for (let i = 2; i <= 10; i++){
    for (let palo of palos){
        deck.push(i + palo);
    }
    }

    for (let palo of palos){
        for(let otro of otros){
            deck.push(otro + palo);
        }
    }

   return _.shuffle(deck);

}

export default crearDeck;