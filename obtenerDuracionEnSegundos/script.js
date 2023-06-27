// Consigna:
// Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración
// Ejemplos:
// obtenerDuracionEnSegundos('00:33') // 33
// obtenerDuracionEnSegundos('01:05') // 65
// obtenerDuracionEnSegundos('10:42') // 642

const obtenerDuracionEnSegundos = (duracion) => {
    let minutos = duracion.split(':')[0];
    let minutosASegundos = Number(minutos * 60);
    let segundos = Number(duracion.split(':')[1]);
    return minutosASegundos + segundos;
}

console.log(obtenerDuracionEnSegundos('00:33'));
console.log(obtenerDuracionEnSegundos('01:05'));
console.log(obtenerDuracionEnSegundos('10:42'));
