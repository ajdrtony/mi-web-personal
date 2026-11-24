
/* ========================================
   MI WEB PROFESIONAL
   JavaScript principal
   ======================================== */

"use strict";

// 1. COMPROBAR QUE JAVASCRIPT FUNCIONA

console.log("JavaScript cargado correctamente");

// 2. CAMBIAR ENTRE TEMA OSCURO Y CLARO

const botonTema = document.getElementById("boton-tema");

if (botonTema) {

    botonTema.addEventListener("click", function() {

        // Añadir o quitar la clase tema-claro
        document.body.classList.toggle("tema-claro");

        // Comprobar si el tema claro está activo
        const esClaro = document.body.classList.contains("tema-claro");

        // Actualizar el texto del botón
        botonTema.textContent = esClaro
            ? "Tema oscuro"
            : "Tema claro";

        console.log("Tema activo:", esClaro ? "claro" : "oscuro");

    });

} else {
    console.error("No se encontró el botón con id='boton-tema'");
}

// 3. MOSTRAR U OCULTAR CONOCIMIENTOS

const botonConocimientos = document.getElementById("boton-conocimientos");
const listaConocimientos = document.getElementById("lista-conocimientos");

if (botonConocimientos && listaConocimientos) {

    botonConocimientos.addEventListener("click", function() {

        // Alternar la visibilidad
        listaConocimientos.hidden = !listaConocimientos.hidden;

        const visible = !listaConocimientos.hidden;

        // Cambiar el texto del botón
        botonConocimientos.textContent = visible
            ? "Ocultar conocimientos"
            : "Mostrar conocimientos";

        // Actualizar estado de accesibilidad
        botonConocimientos.setAttribute(
            "aria-expanded",
            String(visible)
        );

        console.log("Conocimientos visibles:", visible);

    });

} else {
    console.error("No se encontraron los elementos de conocimientos");
}

// 4. ACTUALIZAR EL AÑO AUTOMÁTICAMENTE

const elementoAnio = document.getElementById("anio");

if (elementoAnio) {

    const anioActual = new Date().getFullYear();

    elementoAnio.textContent = anioActual;

} else {
    console.error("No se encontró el elemento con id='anio'");
}

// 5. MENSAJE DE INICIALIZACIÓN

console.log("Inicialización de la web completada");
