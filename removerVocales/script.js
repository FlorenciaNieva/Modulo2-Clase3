// Consigna:
// Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todas sus vocales removidas
// Ejemplos:
// removerVocales('javascript') // 'jvscrpt'
// removerVocales('ada lovelace') // 'd lvlc'

const removerVocales = (str) => {
    return str.replace(/a/g, '').replace(/e/g, '').replace(/i/g, '').replace(/o/g, '').replace(/u/g, '');
}

console.log(removerVocales('javascript'));
console.log(removerVocales('ada lovelace'));