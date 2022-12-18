//let listaItems = ["María", "Pablo", "Samara","Lidia","Leo","Marta","Ainhoa","Francisco","Martina","Salvador","Amalia","Bárbara","Andrea", "Jaime","Jose","Selena","Cristina","Davinia","Paola","Roberto","Sara","Aldara","Rosemary","Esperanza","Israel","Irene","Gabriel","Noelia"];
//let listadoVisual = document.getElementById("listaItemsVisual");
//for(i = 0; i < listaItems.length; i++){
    //listadoVisual.innerHTML += "<p>" + listaItems[i] + "</p>";
//}


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
    let listaItems = document.getElementById('Nombre_input').value;
    let Azar = document.getElementById('Azar');Azar.innerHTML = datos[Math.floor(Math.random() * datos.length  )];
    
   

    for (const listaItems of datos) {
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = listaItems;

        listaItems.innerText(datoParrafo);
    }
    

   
}

     


   
