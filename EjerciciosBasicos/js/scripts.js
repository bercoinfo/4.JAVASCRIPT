  // PRIMER EJERCICIO
  function buscarNombre() {
            let alineacion = ['Jose', 'Juan', 'Ana', 'Carmen', 'Patricia'];
            let nombre = prompt("Indica el nombre que deseas comprobar").toUpperCase;
            let noEsta = 0;
            for (let i = 0; i < alineacion.length; i++) {
                if (nombre == alineacion[i].toUpperCase) {
                    alert("El nombre se encuentra en la lista");
                    noEsta = 1;
                    break;} 
                }
            if(noEsta==0) {alert("El nombre no esta")}
            }
//SEGUNDO EJERCICIO

        