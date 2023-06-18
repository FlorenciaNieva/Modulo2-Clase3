// Consigan:
// Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del tipo de dato y false en caso contrario.
//Ejemplos:
// sonIguales('javascript', 'JavaScript') // true
// sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
// sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false

const sonIguales = (a, b) => {
    return a.toLowerCase() == b.toLowerCase();
}

console.log(sonIguales('javascript', 'JavaScript'));
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace'));
console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'));