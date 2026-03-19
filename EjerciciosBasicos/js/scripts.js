// PRIMER EJERCICIO
/*************************/
/**   Validador de rangos */
/*************************/
function validadN(){
    let n = document.getElementById("numeroRango");
    let mensaje = document.getElementById("valorentre");
    if  (n.value >=10 && n.value<=20){
        mensaje.innerHTML = "El numero "+n.value+" se encuentra entre 10 y 20"
    } else { mensaje.innerHTML = "El numero "+n.value+" NO se encuentra entre 10 y 20" }

}



// segundo EJERCICIO
/*************************/
/**   Buscador en Array */
/*************************/
function buscarNombre() {
    let alineacion = ['Jose', 'Juan', 'Ana', 'Carmen', 'Patricia'];
    let nombre = prompt("Indica el nombre que deseas comprobar").toUpperCase;
    let noEsta = 0;
    for (let i = 0; i < alineacion.length; i++) {
        if (nombre == alineacion[i].toUpperCase) {
            alert("El nombre se encuentra en la lista");
            noEsta = 1;
            break;
        }
    }
    if (noEsta == 0) { alert("El nombre no esta") }
}
//tercero EJERCICIO
/*************************/
/**   Login con intentos */
/*************************/
let intentos = 0; // como en Java he declarar fuera de la funcion para que no se inicie cada vez a 0
function login() {
    let usuario = document.getElementById("usuario");
    let pass = document.getElementById("pass");
    let aviso = document.getElementById("aviso");
    
   if(intentos < 3){
        if (usuario.value == "jose" && pass.value == "1234") {
                aviso.innerHTML = "BIENVENIDO A LA WEB DE LEGUAJE DE MARCAS"

        } else {
            alert("El Usuario no es correcto");
            intentos = ++intentos;
            aviso.innerHTML= intentos+ " intento de 3"
        }

    } else  { 
            aviso.style.color = "red";
            aviso.innerHTML= " Has alcanzado los "+intentos+ " intentos maximos."
           
        }

}
//cuarto EJERCICIO
/*************************/
/**   acumulador*/
/*************************/
function acumulador(){
    let n ;
    let mensaje = document.getElementById("msgacumulado");
    let suma = 0;

        do {
            n = parseInt(prompt("indica un numero"));
            suma = suma+n;
        } while (n !== 0);
    mensaje.innerHTML = "La suma de los numeres indicada es de:"+suma;
}
//5 Ejercicio
/*************************/
/**  deletreo inverso    */
/*************************/
function inverso(){
    let palabra = prompt("DIME UNA PALABRA");
    let letra;

     for(let i = 0; i < palabra.length; i++){
        letra = palabra.charAt((palabra.length-i)-1);
        alert(letra);
     }
}
//6 Maximo de una lista de 5 numeros
function maximo(){
  let lista=[];
  let nmaximo;

  // pedir numeros 5 veces
  for(let i = 0 ; i<5 ; i++ ){
    lista[i]= parseInt(prompt("indica un numero"));
    }
    nmaximo = lista[0];
    lista.forEach(num => {
    if(num > nmaximo){
        nmaximo = num;
    }
   });
   
   alert("El numero maximo"+nmaximo);
}
