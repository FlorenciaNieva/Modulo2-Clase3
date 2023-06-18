// Consigna:
// Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario
// Ejemplos:
// esUltimoCaracter('lovelace', 'e') // true
// esUltimoCaracter('lovelace', 'f') // false

const esUltimoCaracter = (palabra, caracter) => {
    let ultimoCaracter = palabra.slice(-1);
    return ultimoCaracter === caracter;
}

console.log(esUltimoCaracter('lovelace', 'e'));
console.log(esUltimoCaracter('lovelace', 'f'));