function validar() {
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let telefono = document.getElementById("telefono");
  let correo = document.getElementById("correo");
  let mensaje = document.getElementById("mensaje");
  let nombreInfo = document.getElementById("nombre-feedback");
  let apellidoInfo = document.getElementById("apellido-feedback");
  let telefonoInfo = document.getElementById("telefono-feedback");
  let correoInfo = document.getElementById("correo-feedback");
  let mensajeInfo = document.getElementById("mensaje-feedback");
  limpiar();
  var correct=0;
  if (nombre.value.length > 2) {
    nombreInfo.innerText = "";
    nombre.classList.add("is-valid");
    correct++;
  } else {
    nombreInfo.innerText = "Completa este campo";
    nombreInfo.classList.add("error-message");
    nombre.classList.add("is-invalid");
  }
  if (apellido.value.length > 2) {
    apellidoInfo.innerText = "";
    apellido.classList.add("is-valid");
    correct++;
  } else {
    apellidoInfo.innerText = "Completa este campo";
    apellidoInfo.classList.add("error-message");
    apellido.classList.add("is-invalid");
  }
  if (telefono.value.length == 10 && !/[^0-9]/.test(telefono.value)) {
    telefonoInfo.innerText = "";
    telefono.classList.add("is-valid");
    correct++;
  } else if (telefono.value.length != 10 && telefono.value.length != 0) {
    telefonoInfo.innerText = "Telefono no valido";
    telefonoInfo.classList.add("error-message");
    telefono.classList.add("is-invalid");
  } else if (telefono.value.length == 0) {
    telefonoInfo.innerText = "Completa este campo";
    telefonoInfo.classList.add("error-message");
    telefono.classList.add("is-invalid");
  } else if (/[^0-9]/.test(telefono.value)) {
    telefonoInfo.innerText = "Ingresa un telefono valido";
    telefonoInfo.classList.add("error-message");
    telefono.classList.add("is-invalid");
  }
  if (correo.value.length > 2 && validarCorreo(correo.value)) {
    correoInfo.innerText = "";
    correo.classList.add("is-valid");
    correct++;
  } else {
    correoInfo.innerText = "Ingresa un correo valido";
    correoInfo.classList.add("error-message");
    correo.classList.add("is-invalid");
  }
  if (mensaje.value.length > 2 ) {
    mensajeInfo.innerText = "";
    mensaje.classList.add("is-valid");
    correct++;
  } else {
    mensajeInfo.innerText = "Completa este campo";
    mensajeInfo.classList.add("error-message");
    mensaje.classList.add("is-invalid");
  }
  if(correct==5){
      alert("Mensaje enviado")
  }
}
 //Se usa esta funcion para quitar las clases usadas para decorar los input por error o validacion
function limpiar() {
  var elementos = document.querySelectorAll("input");
  for (const iterator of elementos) {
    iterator.classList.remove("is-invalid");
    iterator.classList.remove("is-valid");
  }
  var infos = document.querySelectorAll(".info-error");
  for (const iterator of elementos) {
    iterator.innerText = "";
  }
  console.log(elementos);
}
function validarCorreo(correo) {
  const emailRegex = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/;
  return emailRegex.test(correo);
}
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()