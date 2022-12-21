window.onload = function () {
    window.datos = [];
}

function agregarElemento() {
    let nuevoJugador = document.getElementById('Nombre_input').value;

    datos.push(nuevoJugador);
    mostrarArreglo();


}

function mostrarArreglo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (const nuevoJugador of datos) {
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = nuevoJugador;

        resultado.appendChild(datoParrafo);
    }
}

function eliminarElemento() {
    let nuevoJugador = document.getElementById('Nombre_input').value;
    datos.pop();
    mostrarArreglo();

}

function jugarElemento() {
    cambiar();
    let nuevoJugador = document.getElementById('Nombre_input').value;
    let Azar = document.getElementById('azar-nombres'); Azar.innerHTML = datos[Math.floor(Math.random() * datos.length)];



    for (const nuevoJugador of datos) {
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = listaItems;

        listaItems.innerText(datoParrafo);
    }



}





