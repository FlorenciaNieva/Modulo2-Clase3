// Consigna:
// Crear una función ocultarContraseña que tome como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos
// Ejemplos:
// ocultarContrasenia(123456) // '******'
// ocultarContrasenia(111222333) // '*********'

const ocultarContrasenia = (contrasenia) => {
    let str = contrasenia.toString();
    return str.replace(/[0-9]/g, '*');
}

console.log(ocultarContrasenia(123456));
console.log(ocultarContrasenia(111222333));