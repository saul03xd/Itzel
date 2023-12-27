var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnyes.addEventListener('click', () => {
    alert('Ya sabia que si eras el amor de vida');
});

// Obtener el botón "Si"
const btnYes = document.getElementById('btnyes');

// Agregar un evento de clic al botón "Si"
btnYes.addEventListener('click', function() {
    // Redirigir a otra página
    window.location.href = 'it.html'; // Cambia 'otra_pagina.html' por la URL de la página a la que deseas redirigir
});
