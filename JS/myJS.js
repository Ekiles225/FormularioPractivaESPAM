var numero1 = document.getElementById("numero1").value;
var numero2 = document.getElementById("numero2").value;



function opercaionSuma(){
    const resultado = parseInt(numero1) + parseInt(numero2);
    alert("El resultado es: " + resultado);
}


function opercaionResta(){
    const resultado = parseInt(numero1) - parseInt(numero2);
    alert("El resultado es: " + resultado);
    s
}

function operacionMultiplicar(){
    const resultado = parseInt(numero1) * parseInt(numero2);
    alert("El resultado es: " + resultado)
}

function operacionDividir(){
    if(numero2 !=  (parseInt(numero2) == 0)){
        const resultado = parseInt(numero1) / parseInt(numero2);
        alert("El resultado es: " + resultado)
    }
}