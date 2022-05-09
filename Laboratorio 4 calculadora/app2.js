
function getNumber (inputId) {
    var numero = document.getElementById(inputId).value;
    return numero;
}

function sumar(){
    var numero1 = getNumber("numero1");  //invoco la funcion.
    var numero2 = getNumber("numero2"); 
 
    var suma = parseInt(numero1) + parseInt(numero2); //parseInt, no cocatena.
 
    document.getElementById("resultado").value = suma; //pinta el resultado
   }

function restar(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
 
    var resta = parseInt(numero1) - parseInt(numero2);
 
    document.writeln(resta);
   }

function dividir(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
 
    var divide = parseInt(numero1) / parseInt(numero2);
 
    document.writeln(divide);
   }

function multiplicar(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
 
    var multiplica = parseInt(numero1) * parseInt(numero2);
 
    document.writeln(multiplica);
   }
