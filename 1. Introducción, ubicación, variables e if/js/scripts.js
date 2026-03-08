let nombre = prompt("Dime tu nombre");
alert("Bienvenido a mi pagina " + nombre);
let x = 5;
let y = 6;
let z = x + y;
alert("El resultado de la suma es " + z);
// + nombre sirbe para concatenar el texto con la variable nombre, es decir, unirlos.
let edad = prompt("Dime tu edad");
let mensaje = "";
if (edad < 18) { mensaje = "No puedes acceder a esta pagina"; } else { mensaje = "Puedes acceder a esta pagina"; }
alert(mensaje);