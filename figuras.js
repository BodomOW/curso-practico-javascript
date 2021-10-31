// Código del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Código del Triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura) {
  return (Number(base) * Number(altura)) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculo");

// Diámetro
function diametroCirculo(radio) {
  return Number(radio) * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return PI * (Number(radio) * Number(radio));
}

console.groupEnd();

// Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueLado1 = inputLado1.value;
  const valueLado2 = inputLado2.value;
  const valueBase = inputBase.value;

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value;

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

// Circulo
function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("InputRadio");
  const valueRadio = inputRadio.value;

  const perimetro = perimetroCirculo(valueRadio);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const inputRadio = document.getElementById("InputRadio");
  const valueRadio = inputRadio.value;

  const area = areaCirculo(valueRadio);
  alert(area);
}
