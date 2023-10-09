/**
 * Función  que asigna valor a la carta en función de su nombre
 * @param {string} carta ejemplo: '4H' 
 * @returns {number} retorna el valor en número; ejemplo: 11
 */

 const valorCarta = ( carta ) => {

    if (!carta || carta.length === 0) throw new Error ('carta debe ser un string');
    
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

export default valorCarta;