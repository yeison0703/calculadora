let display = document.getElementById("display");

function agregarValor (valor){
    display.value += valor;
}

function limpiar(){
    display.value = " ";
}

function calcular() {
    if (display.value.trim() === "")
        return;

    try {
        display.value = new Function(`return ${display.value}`)();
    } catch {
        display.value = "Error";
    }
}

document.querySelectorAll(".botones button").forEach(boton =>{
    boton.addEventListener("click", function(){
        let valor = this.innerText;
        if (valor === "C"){
            limpiar();
        } else if(valor === "="){
            calcular();
        } else{
            agregarValor(valor);
        }
    });
});