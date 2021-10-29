// Código del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del Triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triángulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
);
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("La perímetro del triángulo es de: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("La área del triángulo es de: " + areaTriangulo + " cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculo");

// Radio
const radioCirculo = 4;
console.log("La radio del círculo es de: " + radioCirculo + " cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("La diámetro del círculo es de: " + diametroCirculo + " cm");

// PI
const PI = Math.PI;
console.log("Pi es: " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es de: " + perimetroCirculo + " cm");

// Área
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es de: " + areaCirculo + " cm^2");

console.groupEnd();
