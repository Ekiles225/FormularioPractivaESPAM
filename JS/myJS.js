
function opercaionSuma(){
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    let resultado = numero1 + numero2;
    alert("El resultado es: " + resultado);

}


function opercaionResta(){
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    const resultado = numero1 - numero2;
    alert("El resultado es: " + resultado);
}

function operacionMultiplicar(){
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    const resultado = numero1 * numero2;
    alert("El resultado es: " + resultado)
}

function operacionDividir(){
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    if(numero1 !=  numero2 == 0){
        const resultado = parseInt(numero1) / parseInt(numero2);
        alert("El resultado es: " + resultado)
    }
}

