function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(lista) {
  lista.sort((a, b) => a - b);

  const mitadLista = parseInt(lista.length / 2);

  let mediana;

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedio1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedio1y2;

    return `La lista ordenada es: ${lista} y su mediana es: ${mediana}`;
  } else {
    mediana = lista[mitadLista];
    return `La lista ordenada es: ${lista} y su mediana es: ${mediana}`;
  }
}
