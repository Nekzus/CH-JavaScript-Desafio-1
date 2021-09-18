//Solicitud de datos
let nombre = prompt("Ingresa tu Nombre");
let apellido = prompt("Ingresa tu Apellido");
let edad = parseInt(prompt("Ingresa tu Edad"));

//Años a sumar
let decada = 10;

//**** Resultado en consola */
console.log(`Hola ${nombre} ${apellido} en 10 años cumples ${edad + decada} años!!!`);

//**** Resultado modo alert */
alert(`Bienvenid@ ${nombre} ${apellido} en 10 años cumples ${edad + decada} años!!!`);