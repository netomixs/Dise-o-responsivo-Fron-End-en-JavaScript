/**
 * Validacion de fomulario
 * @autor Jesus Ernesto De Leon Gallegos
 */
/*
* Funcion que se ejeuct al boton que validad el contenido del formulario
*/
function validar() {
 //Busca los elemnto de interes por su ID
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
  //Elimina cualquier clase de valicacion si es que es necesario
  limpiarClases();
  //Se inizializa una variable que indca cuantos campos son correctos
  var correct=0;
  //Se valida que el nombre tenga mas de 2 caracteres
  //Si es correcto agrega al input la clae de validacion correcta
  //Si es incorrecto agrega la clase de validacion incorrecta
  if (nombre.value.length > 2) {
    nombreInfo.innerText = "";

    nombre.classList.add("is-valid");
    correct++;
  } else {
    nombreInfo.innerText = "Completa este campo";
    nombreInfo.classList.add("error-message");
    nombre.classList.add("is-invalid");
  }
  //Valida si el apellido tiene mas de 2 caracteres
  if (apellido.value.length > 2) {
    apellidoInfo.innerText = "";
    apellido.classList.add("is-valid");
    correct++;
  } else {
    apellidoInfo.innerText = "Completa este campo";
 
    apellido.classList.add("is-invalid");
  }
  //Valida si el telefono tiene 10 caracteres y si esos caracteres son numericos
  if (telefono.value.length == 10 && !/[^0-9]/.test(telefono.value)) {
    telefonoInfo.innerText = "";
    telefono.classList.add("is-valid");
    correct++;
    //En caso de que no se ingresa el numer correcto de digitos
  } else if (telefono.value.length != 10 && telefono.value.length != 0) {
    telefonoInfo.innerText = "Telefono no valido";
 
    telefono.classList.add("is-invalid");
    //Si el telefono es vacio
  } else if (telefono.value.length == 0) {
    telefonoInfo.innerText = "Completa este campo";
   
    telefono.classList.add("is-invalid");
    //Si el telefono tiene caracteres no numericos
  } else if (/[^0-9]/.test(telefono.value)) {
    telefonoInfo.innerText = "Ingresa un telefono valido";
 
    telefono.classList.add("is-invalid");
  }
  //Valida si el correo es mayor a 2 y que cumpla con la estructura de un correo
  if (correo.value.length > 2 && validarCorreo(correo.value)) {
    correoInfo.innerText = "";
    correo.classList.add("is-valid");
    correct++;
  } else {
    correoInfo.innerText = "Ingresa un correo valido";
    
    correo.classList.add("is-invalid");
  }
  //Valida si hay un mensaje con mas de 2 caarcteres
  if (mensaje.value.length > 2 ) {
    mensajeInfo.innerText = "";
    mensaje.classList.add("is-valid");
    correct++;
  } else {
    mensajeInfo.innerText = "Completa este campo";
 
    mensaje.classList.add("is-invalid");
  }
  //Si todas las entradas son correctas se notifica que se envia el formulario
  if(correct==5){
      alert("Mensaje enviado")
  }
}
 //Se usa esta funcion para quitar las clases usadas para decorar los input por error o validacion
function limpiarClases() {
  //Busque todos los elemtos input
  var elementos = document.querySelectorAll("input");
  //Recorre cada elemento encontrado
  for (const iterator of elementos) {
    //Revueve las clases de validacion
    iterator.classList.remove("is-invalid");
    iterator.classList.remove("is-valid");
  }
  var infos = document.querySelectorAll(".info-error");
  for (const iterator of elementos) {
    iterator.innerText = "";
  }
 
}
/**
 * @param {String} correo que se va a validad
 * @returns bool resgresa si la cadena es valida	
 */

function validarCorreo(correo) {
  const emailRegex = /^([^\s@]+@[^\s@]+\.[^\s@]+)$/;
  return emailRegex.test(correo);
}
 