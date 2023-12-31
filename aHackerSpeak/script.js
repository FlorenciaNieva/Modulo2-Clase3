// Consigna:
// Crear una función aHackerSpeak que tome como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:
// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las 0 se transforman en 0
// Ejemplos:
// aHackerSpeak('javascript') // 'j4v45cr1pt'
// aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
// aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'

const aHackerSpeak = (str) => {
    return str.replace(/i/gi, '1').replace(/e/gi, '3').replace(/a/gi, '4').replace(/s/gi, '5').replace(/o/gi, '0');
}

console.log(aHackerSpeak('javascript'));
console.log(aHackerSpeak('soy una hacker'));
console.log(aHackerSpeak('ADA LOVELACE'));