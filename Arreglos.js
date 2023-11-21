//fundamentos:

// Declaración de un array con algunos nombres
let nombres = ['Juan', 'María', 'Pedro', 'Ana'];

// Mostrar la cantidad de elementos en el array
console.log('Cantidad de nombres:', nombres.length);

// Mostrar todos los nombres y sus posiciones usando un bucle for
console.log('Nombres y posiciones:');
for (let i = 0; i < nombres.length; i++) {
  console.log(`Posición ${i}: ${nombres[i]}`);
}

// Modificar un nombre en una posición específica
nombres[1] = 'Luisa';
console.log('Nombres después de la modificación:', nombres);

// Agregar un nuevo nombre al final del array
nombres.push('Carlos');
console.log('Nombres después de agregar un nuevo nombre:', nombres);

// Eliminar el primer nombre del array
nombres.shift();
console.log('Nombres después de eliminar el primer nombre:', nombres);

// Recorrer el array utilizando forEach para mostrar cada nombre
console.log('Mostrando nombres usando forEach:');
nombres.forEach(function(nombre) {
  console.log(nombre);
});


//Recorrido:

let frutas = ['manzana', 'manzana', 'banana', 'uva', 'naranja'];

console.log('Recorriendo dentro de un array de frutas:');

frutas.forEach(function(fruta, indice) {
  console.log(`Índice ${indice}: ${fruta}`);
});


//Metodos:

let numeros = [2, 4, 6, 8, 10];

// Usando el método map() para duplicar cada número
let numerosDuplicados = numeros.map(function(numero) {
  return numero * 2;
});

console.log('Números originales:', numeros);
console.log('Números duplicados:', numerosDuplicados);

// Usando el método filter() para obtener solo los números mayores que 5
let mayoresQueCinco = numeros.filter(function(numero) {
  return numero > 5;
});

console.log('Números mayores que 5:', mayoresQueCinco);

// Usando el método reduce() para sumar todos los números del array
let suma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log('Suma de todos los números:', suma);



//DESTRUCTURACION
function obtenerInformacion() {
  return ['Brandon', 'Mena', 20];
}

let [nombre, apellido, edad] = obtenerInformacion();

console.log(nombre); 
console.log(apellido); 
console.log(edad); 

//REST
const ingredientes = ['harina', 'azúcar', 'sal', 'huevos', 'leche'];

const [primerIngrediente, segundoIngrediente, ...restoIngredientes] = ingredientes;

console.log(primerIngrediente); 
console.log(segundoIngrediente); 
console.log(restoIngredientes); 

//SPREAD
const frutas1 = ['manzanas', 'peras'];
const frutas2 = ['naranjas', 'uvas'];

const todasLasFrutas = [...frutas1, ...frutas2];

console.log(todasLasFrutas);
