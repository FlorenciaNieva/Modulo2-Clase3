// Consigna:
// Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula
// Ejemplos:
// capitalizar('lovelace') // 'Lovelace'
// capitalizar('había una vez...') // 'Había una vez...'

const capitalizar = (str) => {
    let primeraLetra = str.slice(0,1);
    let mayuscula = primeraLetra.toUpperCase();
    let string = str.slice(1);
    return mayuscula + string;
}

console.log(capitalizar('lovelace'));
console.log(capitalizar('había una vez...'));