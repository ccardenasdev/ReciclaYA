// ============================
// validar.js
// Validaciones simples para los formularios:
// login, registro, empresas y contacto
// ============================
//prueba github
// Función para mostrar un mensaje de error debajo de un campo
function mostrarError(idError, mensaje) {
  const error = document.getElementById(idError);
  if (error) {
    error.textContent = mensaje;
    error.style.display = "block";
  }
}

// Función para ocultar el error de un campo
function ocultarError(idError) {
  const error = document.getElementById(idError);
  if (error) {
    error.style.display = "none";
  }
}

// Valida que un correo tenga formato básico (algo@algo.algo)
function esCorreoValido(correo) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(correo);
}

document.addEventListener("DOMContentLoaded", function () {
  // ---------- FORMULARIO DE LOGIN ----------
  const formLogin = document.getElementById("formLogin");
  if (formLogin) {
    formLogin.addEventListener("submit", function (evento) {
      evento.preventDefault(); // evitamos que se recargue la página
      let esValido = true;

      const correo = document.getElementById("correoLogin").value.trim();
      const clave = document.getElementById("claveLogin").value.trim();

      if (!esCorreoValido(correo)) {
        mostrarError("errorCorreoLogin", "Ingresa un correo válido");
        esValido = false;
      } else {
        ocultarError("errorCorreoLogin");
      }

      if (clave.length < 6) {
        mostrarError("errorClaveLogin", "La contraseña debe tener al menos 6 caracteres");
        esValido = false;
      } else {
        ocultarError("errorClaveLogin");
      }

      if (esValido) {
        // Como no tenemos servidor de verdad, solo mostramos un mensaje
        document.getElementById("mensajeExitoLogin").style.display = "block";
        formLogin.reset();
      }
    });
  }

  // ---------- FORMULARIO DE REGISTRO (usuario) ----------
  const formRegistro = document.getElementById("formRegistro");
  if (formRegistro) {
    formRegistro.addEventListener("submit", function (evento) {
      evento.preventDefault();
      let esValido = true;

      const nombre = document.getElementById("nombreRegistro").value.trim();
      const correo = document.getElementById("correoRegistro").value.trim();
      const clave = document.getElementById("claveRegistro").value.trim();

      if (nombre.length < 3) {
        mostrarError("errorNombreRegistro", "Escribe tu nombre completo");
        esValido = false;
      } else {
        ocultarError("errorNombreRegistro");
      }

      if (!esCorreoValido(correo)) {
        mostrarError("errorCorreoRegistro", "Ingresa un correo válido");
        esValido = false;
      } else {
        ocultarError("errorCorreoRegistro");
      }

      if (clave.length < 6) {
        mostrarError("errorClaveRegistro", "La contraseña debe tener al menos 6 caracteres");
        esValido = false;
      } else {
        ocultarError("errorClaveRegistro");
      }

      if (esValido) {
        document.getElementById("mensajeExitoRegistro").style.display = "block";
        formRegistro.reset();
      }
    });
  }

  // ---------- FORMULARIO DE EMPRESAS ----------
  const formEmpresa = document.getElementById("formEmpresa");
  if (formEmpresa) {
    formEmpresa.addEventListener("submit", function (evento) {
      evento.preventDefault();
      let esValido = true;

      const nombreEmpresa = document.getElementById("nombreEmpresa").value.trim();
      const nit = document.getElementById("nitEmpresa").value.trim();
      const correo = document.getElementById("correoEmpresa").value.trim();

      if (nombreEmpresa.length < 3) {
        mostrarError("errorNombreEmpresa", "Escribe el nombre de la empresa");
        esValido = false;
      } else {
        ocultarError("errorNombreEmpresa");
      }

      if (nit.length < 5) {
        mostrarError("errorNitEmpresa", "Ingresa un NIT válido");
        esValido = false;
      } else {
        ocultarError("errorNitEmpresa");
      }

      if (!esCorreoValido(correo)) {
        mostrarError("errorCorreoEmpresa", "Ingresa un correo válido");
        esValido = false;
      } else {
        ocultarError("errorCorreoEmpresa");
      }

      if (esValido) {
        document.getElementById("mensajeExitoEmpresa").style.display = "block";
        formEmpresa.reset();
      }
    });
  }

  // ---------- FORMULARIO DE CONTACTO ----------
  const formContacto = document.getElementById("formContacto");
  if (formContacto) {
    formContacto.addEventListener("submit", function (evento) {
      evento.preventDefault();
      let esValido = true;

      const nombre = document.getElementById("nombreContacto").value.trim();
      const mensaje = document.getElementById("mensajeContacto").value.trim();

      if (nombre.length < 3) {
        mostrarError("errorNombreContacto", "Escribe tu nombre");
        esValido = false;
      } else {
        ocultarError("errorNombreContacto");
      }

      if (mensaje.length < 10) {
        mostrarError("errorMensajeContacto", "Escribe un mensaje un poco más largo");
        esValido = false;
      } else {
        ocultarError("errorMensajeContacto");
      }

      if (esValido) {
        document.getElementById("mensajeExitoContacto").style.display = "block";
        formContacto.reset();
      }
    });
  }
});
