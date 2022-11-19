

//------------------------------------------------------------------------
function iniciar(){
    var boton=document.getElementById('grabar');
    
    let enter =document.getElementById('texto');
    enter.addEventListener('keyup', (e) => {
        if(e.keyCode === 38){
            alert("jjjjjjjjjjjjjjjj");
            switch(enter.value == "")
            {
                case true: alert("no hay texto");
                break;
                case false: alert("si hay texto");
                nuevoitem();
                mostrar();
                break;
            }
            
        }
    })

    boton.addEventListener('click', nuevoitem, false);
    window.addEventListener("storage", mostrar, false);
    mostrar();
}

function nuevoitem(){
    var clave = [];
    var texto = document.getElementById("texto");
    clave.push(texto.value);
    var valor=document.getElementById('texto').value;
    localStorage.setItem(clave,valor);
    mostrar();
    document.getElementById('texto').value='';
}

function mostrar(){
    var cajadatos=document.getElementById('cajaDatos');
    cajadatos.innerHTML='';
    for(var f=0;f<localStorage.length;f++){
    var clave=localStorage.key(f);
    var valor=localStorage.getItem(clave);
    cajadatos.innerHTML+='<div>'+' - '+valor+'<br><button onclick="eliminar(\''+clave+'\')">Eliminar</button></div>';
    }
 }

function eliminar(clave){
    if(confirm('Está Seguro?')){
    localStorage.removeItem(clave);
    mostrar();
    }
}

function eliminarTodo(){
    if(confirm('Está Seguro?')){
    localStorage.clear();
    mostrar();
    }
}

    window.addEventListener('load', iniciar, false);
    

//-------------------------------------------------------------------------




