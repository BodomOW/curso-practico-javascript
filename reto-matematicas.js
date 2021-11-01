// Funciones generales
function alturaTrianguloIsosceles(
  trianguloGrandeLadoA,
  trianguloGrandeLadoB,
  trianguloGrandeLadoBase
) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
    return "Los lados a y b no son iguales";
  } else {
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeLadoA;

    const trianguloPequenoLadoBCuadrado =
      trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado =
      trianguloPequenoLadoBase * trianguloPequenoLadoBase;

    const trianguloPequenoLadoA = Math.sqrt(
      trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado
    );

    const trianguloGrandeAltura = trianguloPequenoLadoA;
    return trianguloGrandeAltura;
  }
}

// Interaccion con el HTML
function calcularAltura() {
  const inputLado1 = document.getElementById("InputLado1");
  const inputLado2 = document.getElementById("InputLado2");
  const inputBase = document.getElementById("InputBase");

  const trianguloGrandeLadoA = Number(inputLado1.value);
  const trianguloGrandeLadoB = Number(inputLado2.value);
  const trianguloGrandeLadoBase = Number(inputBase.value);

  const altura = alturaTrianguloIsosceles(
    trianguloGrandeLadoA,
    trianguloGrandeLadoB,
    trianguloGrandeLadoBase
  );

  alert(altura);
}
