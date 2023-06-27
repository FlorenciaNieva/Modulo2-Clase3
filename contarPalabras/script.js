// Consigna:
// Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee
// Ejemplos:
// contarPalabras('javascript') // 1
// contarPalabras('ada lovelace') // 2
// contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos') // 14

const contarPalabras = (str) => {
    let mensajeCortado = str.split(' ');
    let num = mensajeCortado.length;
    return num;
}

//Forma corta:
// const contarPalabras = (str) => {
//     return str.split(' ').length;
// }

console.log(contarPalabras('javascript'));
console.log(contarPalabras('ada lovelace'));
console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'));