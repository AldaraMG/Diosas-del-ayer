let btnAbrirPopup = document.getElementById('btn-abrir-pop1'),
    overlay = document.getElementById('overlay'), 
    popup = document.getElementById('popup'), 
    btnCerrarPopup = document.getElementById('btn-cerrar-popup1'); 

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('activo');
    popup.classList.add('activo');

});

btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('activo');
    popup.classList.remove('activo');
});








