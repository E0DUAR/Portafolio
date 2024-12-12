import { datosFormulario, validacionFormulario } from "./script.js";
const form = document.getElementById("contacto-formulario");

let datosValidados = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  confirmarEnvioFormulario();
});

function confirmarEnvioFormulario() {
  //  Asegura que se intenta validar solo cuando el formulario ya fue enviado.
  if (Object.keys(datosFormulario).length > 0) {
    const { nombre, correo, asunto, mensaje } = datosFormulario;
    const errores = validacionFormulario(nombre, correo, asunto, mensaje);

    if (errores.length === 0) {
      datosValidados = { nombre, correo, asunto, mensaje };
      console.log("Datos validados:", datosValidados);

      usandoDatos();
    }
  } else {
    console.log("No se ha enviado el formulario aún.");
  }
}

function usandoDatos() {
  if (datosValidados) {
    console.log(
      "Usando datos validados:",
      datosValidados.nombre,
      datosValidados.correo,
      datosValidados.asunto,
      datosValidados.mensaje
    );

    const data = {
      nombre: datosValidados.nombre,
      correo: datosValidados.correo,
      asunto: datosValidados.asunto,
      mensaje: datosValidados.mensaje,
    };

    emailjs.send('service_qfbgpcy', 'template_rogbxs6', data).then(
        (response) => {
          console.log('Correo enviado!', response.status, response.text);
        },
        (error) => {
          console.log('Error en envio de correo...', error);
        },
      );


  } else {
    console.log("No hay datos validados disponibles.");
  }
}
