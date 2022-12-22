window.onload = function () {
    window.datos = [];//El evento onload se usa para ejecutar una función de JavaScript tan pronto como una página haya cargado.
}

function agregarElemento() {
    let nuevoJugador = document.getElementById('Nombre_input').value;//1º-getElementById(): nos permite acceder a elementos HTML a los que hemos asignado un identificador con el atributo HTML id

    datos.push(nuevoJugador);//2ºEl método push() añade uno o más elementos al final de un array
    mostrarArreglo();


}

function mostrarArreglo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (const nuevoJugador of datos) {
        let datoParrafo = document.createElement('p');// crea un elemento en forma de "p"
        datoParrafo.innerText = nuevoJugador;//luego no se generan nodos en el DOM sino se muestran dichos caracteres en la página.

        resultado.appendChild(datoParrafo);//  Como su propio nombre indica, este método realiza un «append», es decir, inserta o elimina el elemento.
    }
}

function eliminarElemento() {
    let nuevoJugador = document.getElementById('Nombre_input').value;
    datos.pop();//El método pop() elimina el último elemento de un array
    mostrarArreglo();

}

function jugarElemento() {
    cambiar();
    let nuevoJugador = document.getElementById('Nombre_input').value;
    let Azar = document.getElementById('azar-nombres');
     Azar.innerHTML = datos[Math.floor(Math.random() * datos.length)];



    for (const nuevoJugador of datos) {
        let datoParrafo = document.createElement('p');//crea un elemento en forma de "p" vínvulada al evento JugarElemento
        datoParrafo.innerText;

        Azar.innerText(datoParrafo);
    }



}





