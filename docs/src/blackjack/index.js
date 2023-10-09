
import _ from 'underscore';

import crearDeck from './usecases/crear-deck';
import pedirCarta from './usecases/pedir-carta';
import turnoIA from './usecases/turno-computadora';
import crearCarta from './usecases/crear-carta';
import asignarPuntos from './usecases/asignar-puntos';



(() =>{

  'use strict'

      
  //variables
  let deck      = []; //baraja
  const palos   = ['H', 'S', 'C', 'D'];
  const otros   = ['J', 'Q', 'K', 'A'];

  let puntosJugadores = [];


  //Referencias html
  const bnuevo        = document.querySelector('#nuevo');
  const bpedir        = document.querySelector('#pedir');
  const bnoir         = document.querySelector('#noir');
 
  const divCartasJugador = document.querySelectorAll('.divCartas');
  
  const puntosHTML    = document.querySelectorAll('small');



  //Iniciar el juego

  const iniciar = (numJugadores = 2) =>{
    
      
      deck = crearDeck(palos, otros);

      puntosJugadores = [];

      for (let i = 0; i < numJugadores; i++){
          puntosJugadores.push(0);
          puntosHTML[i].innerText = 0;
          divCartasJugador[i].innerHTML = '';
      }


  }



 


 


  //Eventos


  bpedir.addEventListener('click', () =>{

      const carta = pedirCarta(deck);

      let puntosJugador = asignarPuntos(carta, 0, puntosJugadores, puntosHTML);
      
      crearCarta(carta, 0, divCartasJugador);
     
      
      (puntosJugador > 21) ? (console.warn('Perdiste'), bpedir.disabled = true, bnoir.disabled = true, turnoIA(puntosJugador, deck, puntosJugadores.length - 1, divCartasJugador, puntosJugadores, puntosHTML)) : 
      (puntosJugador == 21) ? (console.warn('21, nice!'), bpedir.disabled = true, bnoir.disabled = true, turnoIA(puntosJugador, deck, puntosJugadores.length - 1, divCartasJugador, puntosJugadores, puntosHTML)) : 
      (console.warn('sigue'), bpedir.blur());
      


      
  })


  bnoir.addEventListener('click', () =>{

      bpedir.disabled = true;

      bnoir.disabled = true;

      turnoIA(puntosJugadores[0], deck, puntosJugadores.length - 1, divCartasJugador, puntosJugadores, puntosHTML);


  })

  bnuevo.addEventListener('click', () =>{
   
      iniciar();

      bpedir.disabled   = false;
      bnoir.disabled    = false;
      bnuevo.blur();
  
      
  })


})();

