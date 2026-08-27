// ============================
// menu.js
// Controla el menú que se abre/cierra en celulares
// ============================
//prueba github
// Esperamos a que cargue toda la página
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btnMenu");
  const listaMenu = document.getElementById("listaMenu");

  // Si existe el botón (algunas páginas simples podrían no tenerlo)
  if (boton && listaMenu) {
    boton.addEventListener("click", function () {
      // Le agregamos o quitamos la clase "activo" para mostrar/ocultar
      listaMenu.classList.toggle("activo");
    });
  }
});
