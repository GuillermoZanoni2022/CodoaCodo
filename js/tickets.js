const valorEntrada = 200;
const descEstudiante = 0.80;
const descTrainee = 0.50;
const descJunior = 0.15;

let nombre = document.getElementById("name");
let apellido = document.getElementById("surname");
let cantidad = document.getElementById("quantity");
let categoria = document.getElementById("category");
let mail = document.getElementById("email");

function remueveError(){
    let j=document.querySelectorAll(".form-control, .form-Select");
    let i;
    for (i=0; i < j.length; i++){
        j[i].classList.remove("is-invalid");
    }
}
function validarEmail(valor) {
    let m = true
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
    m = false;
    } 
    return m;
  }

function calculaTotal(){

    remueveError();
    if(nombre.value ===""){
        alert("Por favor Ingrese su Nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    if(apellido.value ===""){
        alert("Por favor Ingrese su Apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }
    if (validarEmail(mail.value)){
        alert("Por favor Ingrese un Email valido");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }    
    if ((cantidad.value ==0)|| isNaN(cantidad.value)) {
        alert("Por favor Ingrese una cantidad");
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }

    
    
    let toTal = 0 
    switch (categoria.value){
        case "1":
        toTal= cantidad.value * valorEntrada;
        break
        case "2":
        toTal= cantidad.value * valorEntrada *(1-descEstudiante)
        break
        case "3":
        toTal= cantidad.value * valorEntrada *(1-descTrainee)
        break
        case "4":
        toTal= cantidad.value * valorEntrada *(1-descJunior)
        break
        case "--Seleccione--":
        toTal= cantidad.value * valorEntrada;
        break   
    }
    document.getElementById('totaliza').value = "El total a pagar es: $"+ Math.round(toTal)
}   


function limpiar(){
    remueveError()
    document.getElementById('totaliza').value = "El total a pagar es: $"

}

ejecuta.addEventListener('click',calculaTotal);
borra.addEventListener('click',limpiar)