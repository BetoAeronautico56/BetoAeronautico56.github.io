/*
window.onload = Iniciar;

function Iniciar(){
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
    mostrarDatos();
}

function clickBtnAgregar(){
    var txnotas = document.getElementById("pensamiento");
    localStorage.nota = txnotas.value;
    mostrarDatos();
}

function mostrarDatos(){
    var divNotas = document.getElementById("divNotas");
    divNotas.innerHTML = localStorage.nota;
}
*/




let inputPensamiento = document.getElementById("pensamiento");
let botons = document.getElementById("Agregar");
let listas = document.getElementById("lista");


let numeros = document.getElementById("numeros");
let totalDePensamientos = 0;

inputPensamiento.addEventListener('keyup', (e) => {
    
    if( e.keyCode === 13){
        switch(inputPensamiento.value == "") {
            case true: alert("no hay valor");
            break;

            case false: 
            //tomamos el valor del campo
            var elemnto = inputPensamiento.value;
            //creamos los elemento de la tabla
            var li = document.createElement("li");
            li.textContent = elemnto;

            //motramos los li al listado
            listas.appendChild(li);
            


            //incremento de el numero
        
            totalDePensamientos++;
            numeros.innerHTML = totalDePensamientos;

            //se agrega el caracter de eliminar
            let btnEliminar = document.createElement("span");
            btnEliminar.textContent = " X ";
            li.appendChild(btnEliminar);


            //funcionalidad del boton de eliminar
            btnEliminar.onclick = function (){
                li.remove();
                totalDePensamientos--;
                numeros.innerHTML = totalDePensamientos;
            }

            
            


            inputPensamiento.value = "";
                
            

                alert("haz introducido pensamiento");

                
            break;
        }
    } 
})

    

    

