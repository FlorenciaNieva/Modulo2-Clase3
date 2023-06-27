// Consigna:
// Crear una función burlarse que tome como argumento un string str y devuelva el mismo string con todas las vocales reemplazadas por la letra i
// Ejemplo:
// burlarse('programar es dificil') // 'prigimir is dificil'

const burlarse = (str) => {
    const vocales = /[aeiou]/gi;
    return str.replace(vocales, "i");
}

console.log(burlarse('programar es dificil'));