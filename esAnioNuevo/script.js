// Consigna:
// Crear una función esAnioNuevo que tome como argumento un string fecha con el formato DD:MM:YYYY un argumento y devuelva true si la fecha es año nuevo o false si no lo es
// Ejemplos:
// esAnioNuevo('03/05/2015') // false
// esAnioNuevo('22/01/1987') // false
// esAnioNuevo('01/01/2020') // true

const esAnioNuevo = (fecha) => {
    let anioNuevo = '01/01/2020'
    return fecha === anioNuevo;
}

console.log(esAnioNuevo('03/05/2015'));
console.log(esAnioNuevo('22/01/1987'));
console.log(esAnioNuevo('01/01/2020'));