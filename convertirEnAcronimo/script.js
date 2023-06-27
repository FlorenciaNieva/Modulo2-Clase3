// Consigna:
// Crear una función convertirEnAcronimo que tome como argumento un string str y un string con todos los caracteres en mayúscula y separados por un punto
// Ejemplos:
// convertirEnAcronimo('afip') // 'A.F.I.P.'
// convertirEnAcronimo('nasa') // 'N.A.S.A.'

const convertirEnAcronimo = (str) => {
    const separador = '.';
    const acronimo = str.toUpperCase().split('').join(`${separador}`);
    return `${acronimo}${separador}`;
};

  console.log(convertirEnAcronimo('afip')); // 'A.F.I.P.'
  console.log(convertirEnAcronimo('nasa')); // 'N.A.S.A.'