window.onload = function() {
    window.datos = [];
}

function agregarElemento() {
    let listaItems = document.getElementById('Nombre_input').value;

    datos.push(listaItems);
    
    
}

function mostrarArreglo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (const listaItems of datos) {
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = listaItems;

        resultado.appendChild(datoParrafo);
    }
}

function eliminarElemento () {
    let listaItems = document.getElementById('Nombre_input').value;

    datos.pop(listaItems);

}

function jugarElemento (){
    cambiar();
    let listaItems = document.getElementById('Nombre_input').value;

    let Azar = document.getElementById('azar-nombres');Azar.innerHTML = datos[Math.floor(Math.random() * datos.length  )];
    
   

    for (const listaItems of datos) {
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = listaItems;

        listaItems.innerText(datoParrafo);
    }
    

   
}

     



