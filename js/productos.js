// ============================
// productos.js
// Muestra la lista de materiales para reciclar
// y permite publicar uno nuevo (se guarda solo en memoria)
// ============================

// Lista inicial de materiales de ejemplo
// Cada producto es un objeto con: material, cantidad, precio, vendedor
let listaProductos = [
  {
    material: "Cartón",
    cantidad: "50 kg",
    precio: 25000,
    vendedor: "Recicladora El Progreso",
  },
  {
    material: "Botellas PET",
    cantidad: "30 kg",
    precio: 40000,
    vendedor: "Juan Pérez",
  },
  {
    material: "Chatarra de aluminio",
    cantidad: "15 kg",
    precio: 60000,
    vendedor: "Metales Andina S.A.S",
  },
];

// Muestra todos los productos en la página
function mostrarProductos() {
  const contenedor = document.getElementById("listaProductos");
  if (!contenedor) return; // si no estamos en la página de productos, no hacemos nada

  contenedor.innerHTML = ""; // limpiamos antes de volver a dibujar

  listaProductos.forEach(function (producto) {
    // Creamos la tarjeta del producto
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-producto";

    tarjeta.innerHTML = `
      <h3>${producto.material}</h3>
      <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
      <p><strong>Precio:</strong> $${producto.precio.toLocaleString("es-CO")}</p>
      <p><strong>Publicado por:</strong> ${producto.vendedor}</p>
      <button class="btn btn-secundario btn-contactar">Contactar</button>
    `;

    contenedor.appendChild(tarjeta);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarProductos();

  // Formulario para publicar un nuevo producto
  const formPublicar = document.getElementById("formPublicar");
  if (formPublicar) {
    formPublicar.addEventListener("submit", function (evento) {
      evento.preventDefault();

      const material = document.getElementById("materialPublicar").value.trim();
      const cantidad = document.getElementById("cantidadPublicar").value.trim();
      const precio = document.getElementById("precioPublicar").value.trim();
      const vendedor = document.getElementById("vendedorPublicar").value.trim();

      // Validación simple: que ningún campo esté vacío
      if (!material || !cantidad || !precio || !vendedor) {
        alert("Por favor llena todos los campos antes de publicar");
        return;
      }

      // Agregamos el nuevo producto a la lista
      listaProductos.push({
        material: material,
        cantidad: cantidad,
        precio: Number(precio),
        vendedor: vendedor,
      });

      mostrarProductos(); // volvemos a dibujar la lista con el nuevo producto
      formPublicar.reset();

      // Aviso simple para el usuario
      const aviso = document.getElementById("avisoPublicar");
      if (aviso) {
        aviso.style.display = "block";
        setTimeout(function () {
          aviso.style.display = "none";
        }, 3000);
      }
    });
  }

  // Botón "Contactar" (usamos delegación de eventos porque las tarjetas
  // se crean dinámicamente con JavaScript)
  const contenedor = document.getElementById("listaProductos");
  if (contenedor) {
    contenedor.addEventListener("click", function (evento) {
      if (evento.target.classList.contains("btn-contactar")) {
        alert("Para contactar al vendedor, primero debes iniciar sesión.");
      }
    });
  }
});
