function validar() {
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let telefono = document.getElementById("telefono");
  let correo = document.getElementById("correo");
  let mensaje = document.getElementById("mensaje");
  let nombreInfo = document.getElementById("nombre-error");
  let apellidoInfo = document.getElementById("apellido-error");
  let telefonoInfo = document.getElementById("telefono-error");
  let correoInfo = document.getElementById("correo-error");
  let mensajeInfo = document.getElementById("mensaje-error");
  limpiar();
  var correct=0;
  if (nombre.value.length > 2) {
    nombreInfo.innerText = "";
    nombre.classList.add("input-valid");
    correct++;
  } else {
    nombreInfo.innerText = "Completa este campo";
    nombreInfo.classList.add("error-message");
    nombre.classList.add("input-invalid");
  }
  if (apellido.value.length > 2) {
    apellidoInfo.innerText = "";
    apellido.classList.add("input-valid");
    correct++;
  } else {
    apellidoInfo.innerText = "Completa este campo";
    apellidoInfo.classList.add("error-message");
    apellido.classList.add("input-invalid");
  }
  if (telefono.value.length == 10 && !/[^0-9]/.test(telefono.value)) {
    telefonoInfo.innerText = "";
    telefono.classList.add("input-valid");
    correct++;
  } else if (telefono.value.length != 10 && telefono.value.length != 0) {
    telefonoInfo.innerText = "Telefono no valido";
    telefonoInfo.classList.add("error-message");
    telefono.classList.add("input-invalid");
  } else if (telefono.value.length == 0) {
    telefonoInfo.innerText = "Completa este campo";
    telefonoInfo.classList.add("error-message");
    telefono.classList.add("input-invalid");
  } else if (/[^0-9]/.test(telefono.value)) {
    telefonoInfo.innerText = "Ingresa un telefono valido";
    telefonoInfo.classList.add("error-message");
    telefono.classList.add("input-invalid");
  }
  if (correo.value.length > 2 && validarCorreo(correo.value)) {
    correoInfo.innerText = "";
    correo.classList.add("input-valid");
    correct++;
  } else {
    correoInfo.innerText = "Ingresa un correo valido";
    correoInfo.classList.add("error-message");
    correo.classList.add("input-invalid");
  }
  if (mensaje.value.length > 2 ) {
    mensajeInfo.innerText = "";
    mensaje.classList.add("input-valid");
    correct++;
  } else {
    mensajeInfo.innerText = "Completa este campo";
    mensajeInfo.classList.add("error-message");
    mensaje.classList.add("input-invalid");
  }
  if(correct==5){
      alert("Mensaje enviado")
  }
}
 //Se usa esta funcion para quitar las clases usadas para decorar los input por error o validacion
function limpiar() {
  var elementos = document.querySelectorAll("input");
  for (const iterator of elementos) {
    iterator.classList.remove("input-valid");
    iterator.classList.remove("input-invalid");
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
