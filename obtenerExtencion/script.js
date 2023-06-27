// Consigna:
// Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo
// Ejemplos:
// obtenerExtension('imagen.png') // 'png'
// obtenerExtension('index.html') // 'html'
// obtenerExtension('notas.txt') // 'txt'

const obtenerExtension = (archivo) => {
    return archivo.split('.')[1];
}

console.log(obtenerExtension('imagen.png'));
console.log(obtenerExtension('index.html'));
console.log(obtenerExtension('notas.txt'));