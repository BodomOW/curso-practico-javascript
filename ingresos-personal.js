// Gastos fijos
const renta = 5000;
const gastoRentaPorCatorcena = renta / 2;
const serviciosCatorcena = 500;
const despensaCatorcena = 1100;
const transporteCatorcena = 200;
const lavanderiaCatorcena = 180;
const corteCabello = 200;
const corteCabelloCatorcena = corteCabello / 4;
const deudaMadreCatorcena = 500;
const apoyoTonoCatorcena = 500;
const gastosTontos = 1000;

const gastosFijosTotal =
  gastoRentaPorCatorcena +
  serviciosCatorcena +
  despensaCatorcena +
  transporteCatorcena +
  lavanderiaCatorcena +
  corteCabelloCatorcena +
  deudaMadreCatorcena +
  apoyoTonoCatorcena;

const gastosEsencialesReales = gastoRentaPorCatorcena + despensaCatorcena + lavanderiaCatorcena;
const gastosExtraReales = transporteCatorcena + corteCabelloCatorcena + gastosTontos + serviciosCatorcena;
const deudas = deudaMadreCatorcena + apoyoTonoCatorcena;

// Funcion matematica
function calcularSueldoNetoCatorcenal(salario) {
  const salarioDiario = salario / 30;
  const salarioBrutoCatorcenal = salarioDiario * 14;
  const deduccionesCatorcenal = 1585.59;

  const sueldoNetoCatorcenal = salarioBrutoCatorcenal - deduccionesCatorcenal;

  return sueldoNetoCatorcenal;
}

// Interaccion con HTML
function calcularIngresos() {
  const inputSalary = document.getElementById('InputSalary');
  const salaryValue = inputSalary.value;

  const sueldoNetoCatorcenal = calcularSueldoNetoCatorcenal(salaryValue);

  const gastosEsenciales = sueldoNetoCatorcenal * 0.5;
  const gastosExtra = sueldoNetoCatorcenal * 0.3;
  const deudasYAhorro = sueldoNetoCatorcenal * 0.2;

  const ahorroMaximo = sueldoNetoCatorcenal - gastosFijosTotal;
  const ahorroMinimo = sueldoNetoCatorcenal - (gastosFijosTotal + gastosExtra);

  const deudasYAhorroReales = deudasYAhorro - deudas;

  const ahorroEstimado = sueldoNetoCatorcenal - (gastosEsencialesReales + gastosExtraReales);

  const sueldoNetoCatorcenalP = document.getElementById('SueldoNetoCatorcenalP');
  sueldoNetoCatorcenalP.innerText = 'Tu sueldo neto catorcenal es de: $' + sueldoNetoCatorcenal;

  const recomendacionP = document.getElementById('RecomendacionP');
  recomendacionP.innerText = `El limite recomendado de tus Gastos Esenciales es de: $${gastosEsenciales},
  El limite recomendado de tus Gastos Extra es de: $${gastosExtra}, 
  Y tu dinero recomendado para Deudas y ahorros es de: $${deudasYAhorro}`;

  const prediccionP = document.getElementById('PrediccionP');
  prediccionP.innerText = `Tus gastos estimados por catorcena son de: $${gastosFijosTotal},
  Tu capacidad maxima de ahorro es de: $${ahorroMaximo}, 
  Y tu capacidad minima de ahorro es de: $${ahorroMinimo}`;

  const gastosRealesP = document.getElementById('GastosRealesP');
  gastosRealesP.innerText = `Tus gastos estimados por catorcena son de: $${gastosEsencialesReales},
  Tus gastos extra reales son de: $${gastosExtraReales}, 
  Tu dinero disponible para ahorrar es de: $${deudasYAhorroReales}`;

  const ahorroEstimadoP = document.getElementById('AhorroEstimadoP');
  ahorroEstimadoP.innerText = `Tu ahorro promedio es de: $${ahorroEstimado}`;
}
