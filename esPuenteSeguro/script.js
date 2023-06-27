// Consigna:
// Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar
// Ejemplos:
// esPuenteSeguro('### ##') // true
// esPuenteSeguro('##### ####') // true
// esPuenteSeguro('########') // false

const esPuenteSeguro = (puente) => {
    return puente.includes(' ');
}

console.log(esPuenteSeguro('### ##'));
console.log(esPuenteSeguro('##### ####'));
console.log(esPuenteSeguro('########'));