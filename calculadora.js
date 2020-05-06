var num1=prompt("Introduce el primer numero");
var num2=prompt("Introduce el segundo numero");
if (!isNaN(num1) && !isNaN(num2)) {
    var operacion=prompt("¿Que operación deseas realizar. Suma, resta, multiplicación, división").toLocaleLowerCase();
    if (operacion=="suma"){
        alert(parseInt(num1)+parseInt(num2));
    }
    else if(operacion=="resta"){
        alert("El resultado es " + parseInt(num1)-parseInt(num2));
    }
    else if (operacion=="multiplicacion" || operacion=="multiplicación") {
        alert("El resultado es " + parseInt(num1)*parseInt(num2));
    }
    else if (operacion=="division" || operacion=="división"){
        alert("El resultado es " + parseInt(num1)/parseInt(num2));
    }
    else{
        alert("No se puede realizar esta operación");
    }
}
else{
    if (typeof(num1)=="string" || typeof(num2)=="string") {
        alert("Has introducido valores no numericos");
    } else {
        alert("Error no identificado");
    }
    }
        
   