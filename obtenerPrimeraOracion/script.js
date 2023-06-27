// Consigna:
// Crear una función obtenerPrimeraOracion que tome como argumento un string str y la primera oración de dicho string
// Ejemplos:
// obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') // 'A mí no me preguntes, sólo soy una oración'
// obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') // 'Tengo varias oraciones.'

const obtenerPrimeraOracion = (str) => {
    let oracion = str.split('.');
    return oracion.slice(0, 1);
}

console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'));
console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración'));