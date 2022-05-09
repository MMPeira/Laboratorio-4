
//arrow function. Return implicito, despues de la flecha, devolvemos el valor.
var getNumber = (inputId) => document.getElementById(inputId).value;

//arrow function, sin return.
var sumar = () => {
    var numero1 = getNumber("numero1");  //invoco la funcion.
    var numero2 = getNumber("numero2"); 
 
    var suma = parseInt(numero1) + parseInt(numero2); //parseInt, no cocatena.
 
    document.getElementById("resultado").value = suma; //pinta el resultado
   }
   var restar = () => {
    var numero1 = getNumber("numero1");  //invoco la funcion.
    var numero2 = getNumber("numero2"); 
 
    var resta = parseInt(numero1) - parseInt(numero2); //parseInt, no cocatena.
 
    document.getElementById("resultado").value = resta; //pinta el resultado
   }

   var dividir = () => {
    var numero1 = getNumber("numero1");  //invoco la funcion.
    var numero2 = getNumber("numero2"); 
 
    var divide = parseInt(numero1) / parseInt(numero2); //parseInt, no cocatena.
 
    document.getElementById("resultado").value = divide; //pinta el resultado
   }

   var multiplicar = () => {
    var numero1 = getNumber("numero1");  //invoco la funcion.
    var numero2 = getNumber("numero2"); 
 
    var multiplica = parseInt(numero1) + parseInt(numero2); //parseInt, no cocatena.
 
    document.getElementById("resultado").value = multiplica; //pinta el resultado
   }
