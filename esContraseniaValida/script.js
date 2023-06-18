// Consigna:
// Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres
// Ejemplos:
// esValida('contraseniaMuySegura') // true
// esValida('abc123') // false

const esValida = (contrasenia) => {
    let string = contrasenia.toString();
    let caracteres = string.length;
    return caracteres >= 8;
}

console.log(esValida('contraseniaMuySegura'));
console.log(esValida('abc123'));