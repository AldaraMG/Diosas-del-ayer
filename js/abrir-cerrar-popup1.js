let btnAbrirPopup = document.getElementById('btn-abrir-pop1'),//variable del botón para abrir la ventana
    overlay = document.getElementById('overlay'), // variable de la visibilidad
    popup = document.getElementById('popup'), //  variable de la propia ventana
    btnCerrarPopup = document.getElementById('btn-cerrar-popup1');// variable del botón para cerrar la ventana

    //getElementById(): nos permite acceder a elementos HTML a los que hemos asignado un identificador con el atributo HTML id

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('activo');
    popup.classList.add('activo');

});// Quiero un addeventlistener que cuando presione un click me ejecute esta función. Agregar dos eventos, es decir,cuando presione el botón me añada la clase activo del overley.Cuando la tiene,permite que esté visible. Quiero que el overlay tenga un cambio en sus clases con el classLiss.add.

btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('activo');
    popup.classList.remove('activo');
});








