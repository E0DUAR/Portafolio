document.addEventListener("DOMContentLoaded", () => {
  const skillsDescriptions = {
    WordPress: `
            <p class="popup-paragraph">Con más de 5 años de experiencia en el manejo y soporte de sitios web basados en WordPress, he trabajado tanto en la resolución de problemas técnicos como en el desarrollo de proyectos desde cero. Mi experiencia incluye tareas como:</p>
            <ul class="popup-list">
                <li>Administración de sitios web</li>
                <li>Limpieza de virus</li>
                <li>Implementación de plugins y funcionalidades</li>
                <li>Solución de bugs que afectan el rendimiento y la apariencia de las páginas</li>
            </ul>
            <br>
            <p class="popup-paragraph">Entre los proyectos en los que he intervenido se encuentran sitios como:</p>
            <ul class="popup-list">
                <li><a class="popup-link" href="https://montacargascolombia.net/" target="_blank">Montacargas Colombia</a></li>
                <li><a class="popup-link" href="https://rentaliftdecolombia.com/" target="_blank">Rentalift de Colombia</a></li>
                <li><a class="popup-link" href="https://palmasmall.com/" target="_blank">Palmasmall</a></li>
            </ul><br>
            <p class="popup-paragraph">Además, he desarrollado desde cero sitios web como:</p>
            <ul class="popup-list">
                <li><a class="popup-link" href="https://copacolcali.com/" target="_blank">Copacol Cali</a></li>
                <li><a class="popup-link" href="https://jycmedical.com/" target="_blank">JYC Medical</a></li>
            </ul><br>
            <p class="popup-paragraph">Mi enfoque está en asegurar que cada sitio web sea seguro, eficiente y esté perfectamente optimizado, para que el cliente pueda concentrarse en su negocio mientras yo gestiono la parte técnica.</p>
        `,
    Elementor: `
            <p class="popup-paragraph">Tengo experiencia en Elementor page builder administrando sitios web y creando diseños responsivos. He creado dos sitios web utilizando esta tecnología:</p>

            <ul class="popup-list">
            <li><a href="https://copacolcali.com" class="popup-link">copacolcali.com</a></li>
            <li><a href="https://jycmedical.com" class="popup-link">jycmedical.com</a></li>
            </ul>
        `,
    ServerAdmin: `
            <p class="popup-paragraph">
                He administrado servidores web en entornos de producción y desarrollo, realizando tareas como:
            </p>
            <ul class="popup-list">
                <li>Gestión y soporte de directorio activo en Windows Server</li>
                <li>Migración de sitios web entre hostings</li>
                <li>Configuración y administración de dominios, correos corporativos</li>
            </ul>
        `,
    CRM: `
            <p class="popup-paragraph">
                Mi experiencia en la administración de CRM abarca un profundo conocimiento en plataformas como 
                <span class="popup-link">Bitrix24</span> y <span class="popup-link">Zoho CRM</span>. 
            </p>
            <ul class="popup-list">
                <li>Alimentación de bases de datos, tanto de forma manual como mediante procesos automatizados. asegurando la precisión y consistencia de la información</li>
                <li>Integraciones con aplicaciones de terceros para ampliar las funcionalidades del CRM, adaptándolo a las necesidades específicas del negocio</li>
                <li>Capacitaciones personalizadas y sesiones de retroalimentación para el equipo de trabajo, asegurando un manejo eficaz de la herramienta y alineando su uso con los objetivos organizacionales</li>
            </ul>
        `,
    Office365: `
            <p class="popup-paragraph">
                Mi experiencia en la administración de Microsoft Office 365 abarca desde la etapa inicial de evaluación y adquisición del servicio, hasta la implementación completa y soporte continuo. Entre las actividades más destacadas que he realizado se incluyen:
            </p>
            <ul class="popup-list">
                <li>Gestión integral desde la cotización, compra y activación del servicio</li>
                <li>Migración de correos electrónicos y configuración de cuentas de manera eficiente</li>
                <li>Asignación y gestión de usuarios, roles y licencias, garantizando un uso óptimo de los recursos</li>
                <li>Soporte técnico al usuario final, resolviendo incidencias y asegurando una experiencia fluida</li>
            </ul>
        `,
    GoogleWorkspace: `
            <p class="popup-paragraph">
                Mi experiencia en la administración de Google Workspace abarca desde la planificación inicial hasta el soporte técnico continuo. He trabajado en la implementación y optimización de esta herramienta para mejorar la colaboración y eficiencia en diferentes entornos empresariales. Entre las actividades más relevantes que he realizado se encuentran:
            </p>
            <ul class="popup-list">
                <li>Gestión completa desde la contratación y configuración inicial del servicio</li>
                <li>Migración de correos y datos desde otras plataformas hacia Google Workspace</li>
                <li>Creación y administración de usuarios, grupos, políticas de seguridad y permisos personalizados</li>
                <li>Configuración avanzada de dominios, DNS y herramientas de seguridad para proteger la información empresarial</li>
                <li>Soporte técnico al usuario final, brindando soluciones rápidas y eficaces para problemas cotidianos</li>
            </ul>
        `,
    UserSupport: `
            <p class="popup-paragraph">
                Mi experiencia en el área de Soporte Bilingüe al Usuario Final comenzó hace más de 3 años, trabajando en el sector BPO. He brindado servicio al cliente en inglés para empresas internacionales que operan a nivel global, destacándome por ofrecer una atención calida y una atención personalizada y orientada hacia el cuidado del usuario. Entre los tópicos más relevantes se incluyen:
                </p>
            <ul class="popup-list">
                <li>Servicio al cliente para instituciones bancarias, resolviendo consultas financieras y asegurando la satisfacción del cliente</li>
                <li>Atención a empresas de retail, manejando incidencias relacionadas con pedidos, devoluciones y procesos de compra</li>
                <li>Soporte técnico en inglés para empresas de tecnología, resolviendo problemas técnicos complejos y garantizando la funcionalidad de los servicios</li>
            </ul>
            <br>
            <p class="popup-paragraph">
                Mi capacidad para comunicarme de manera efectiva en inglés, junto con un enfoque en la empatía y la resolución de problemas, me ha permitido ofrecer un servicio excepcional que cumple con los estándares más altos de calidad y satisfacción al cliente.
            </p>

        `,
    HTML: `
            <p class="popup-paragraph">
                He adquirido experiencia en HTML a través de diversos proyectos, tanto académicos como personales. Durante mi trayectoria, he trabajado en:
            </p>
            <ul class="popup-list">
                <li>Proyectos universitarios que me han permitido consolidar mis conocimientos en este lenguaje de marcado</li>
                <li>Creación de sitios web en WordPress, incluyendo la personalización de código para mejorar la funcionalidad y el diseño</li>
                <li>Desarrollo de código personalizado para campañas de correo electrónico, asegurando compatibilidad y diseño responsivo</li>
                <li>Integraciones específicas en páginas web para optimizar su rendimiento y funcionalidad</li>
            </ul><br>
            <p class="popup-paragraph">
                Algunos de mis proyectos, que reflejan mis habilidades y dedicación, pueden ser encontrados en mi GitHub: 
                <a class="popup-link" href="https://github.com/E0DUAR" target="_blank">https://github.com/E0DUAR</a>.
            </p>
        `,
    CSS: `
            <p class="popup-paragraph">
                Mi experiencia en CSS se ha desarrollado a través de una variedad de proyectos académicos y personales. Entre los trabajos más destacados se encuentran:
            </p>
            <ul class="popup-list">
                <li>Proyectos universitarios donde aprendí y apliqué técnicas de diseño responsivo</li>
                <li>Personalización de sitios web en WordPress mediante la edición de hojas de estilo, adaptando los diseños a las necesidades del cliente</li>
                <li>Desarrollo de interfaces visualmente atractivas para campañas de correo electrónico y aplicaciones web</li>
                <li>Creación de estilos personalizados para mejorar la experiencia del usuario en proyectos personales y profesionales</li>
            </ul>
            <p class="popup-paragraph">
                Algunos ejemplos de mi trabajo con CSS pueden ser encontrados en mi GitHub: 
                <a class="popup-link" href="https://github.com/E0DUAR" target="_blank">https://github.com/E0DUAR</a>.
            </p>        
        `,
    JavaScript: `
            <p class="popup-paragraph">
                Mi experiencia en JavaScript se ha desarrollado a través de proyectos académicos, personales y profesionales, lo que me ha permitido profundizar en el uso de este lenguaje para crear interactividad y mejorar la funcionalidad de páginas web. Algunos de los logros más destacados incluyen:
            </p>
            <ul class="popup-list">
                <li>Desarrollo de scripts personalizados para automatizar tareas y mejorar la experiencia del usuario</li>
                <li>Creación de funcionalidades dinámicas en sitios web, como menús interactivos, sliders y validaciones de formularios</li>
                <li>Integraciones con APIs para conectar aplicaciones web con servicios externos y procesar datos en tiempo real</li>
            </ul> <br>
            <p class="popup-paragraph">
                Algunos ejemplos de mis proyectos en JavaScript, donde exploro y aplico soluciones innovadoras, pueden encontrarse en mi GitHub: 
                <a class="popup-link" href="https://github.com/E0DUAR" target="_blank">https://github.com/E0DUAR</a>.
            </p>
        `,
    PHP: `
            <p class="popup-paragraph">
                Mi experiencia en PHP se ha desarrollado a través de proyectos personales y académicos, enfocándome en la creación de soluciones dinámicas y funcionales para la web. Algunos de los logros y actividades más destacadas incluyen:
            </p>
            <ul class="popup-list">
                <li>Desarrollo de aplicaciones web dinámicas utilizando PHP para gestionar bases de datos y procesos en el servidor</li>
                <li>Integración de formularios y sistemas de autenticación de usuarios con validaciones seguras</li>
                <li>Creación de scripts personalizados para automatizar tareas repetitivas y optimizar procesos internos</li>
                <li>Implementación de integraciones con APIs para ampliar las capacidades de las aplicaciones web</li>
            </ul><br>
            <p class="popup-paragraph">
                Algunos ejemplos de proyectos en los que he aplicado PHP están disponibles en mi GitHub: 
                <a class="popup-link" href="https://github.com/E0DUAR" target="_blank">https://github.com/E0DUAR</a>.
            </p>
        `,
    Angular: `
            <p class="popup-paragraph">
                Mi experiencia con Angular ha sido principalmente en proyectos universitarios, donde he aprendido y aplicado las bases del desarrollo de aplicaciones web dinámicas y estructuradas. Algunas de las actividades clave en las que he trabajado incluyen:
            </p>
            <ul class="popup-list">
                <li>Desarrollo de aplicaciones web simples utilizando Angular, enfocándome en la creación de componentes y módulos</li>
                <li>Gestión de datos mediante servicios y observables para crear aplicaciones interactivas</li>
                <li>Implementación de rutas y navegación entre vistas para mejorar la experiencia del usuario</li>
                <li>Integración de formularios y validaciones para recolectar datos de usuarios de manera eficiente</li>
            </ul><br>
            <p class="popup-paragraph">
                Algunos de mis proyectos relacionados con Angular pueden encontrarse en mi GitHub: 
                <a class="popup-link" href="https://github.com/E0DUAR" target="_blank">https://github.com/E0DUAR</a>.
            </p>    
        `,
    MySQL: `
            <p class="popup-paragraph">
                Mi experiencia con <span class="popup-link">MySQL</span> incluye el trabajo con bases de datos relacionales en proyectos pequeños y medianos. Algunas de las actividades más relevantes en las que he participado son:
            </p>
            <ul class="popup-list">
                <li>Creación y diseño básico de bases de datos para almacenar y gestionar datos de aplicaciones web</li>
                <li>Desarrollo de consultas simples (SQL) para recuperar, insertar y actualizar datos en las tablas</li>
                <li>Conexión de bases de datos MySQL con sitios web y aplicaciones para gestionar información de forma dinámica</li>
            </ul>
            <p class="popup-paragraph">
                Algunos de los proyectos en los que he trabajado con MySQL pueden ser encontrados en mi GitHub: 
                <a class="popup-link" href="https://github.com/E0DUAR" target="_blank">https://github.com/E0DUAR</a>.
            </p>
        `,
    ConstantContact: `
            <p class="popup-paragraph">
                Mi experiencia en Constant Contact se centra en la creación y gestión de campañas de <strong>email marketing</strong>, donde he realizado diversas actividades para optimizar el alcance y la efectividad de las campañas. Algunas de las tareas más relevantes incluyen:
            </p>
            <ul class="popup-list">
                <li>Creación de campañas de email marketing, desde el diseño de correos hasta la segmentación de la audiencia</li>
                <li>Alimentación y gestión de bases de datos, asegurando que los contactos estén actualizados y segmentados adecuadamente</li>
                <li>Integración de Constant Contact con plataformas externas como <strong>WordPress</strong> para automatizar el envío de correos y mejorar la comunicación con los usuarios</li>
                <li>Automatización de procesos mediante integraciones con plataformas como <strong>Zapier</strong> para optimizar flujos de trabajo y mejorar la productividad</li>
            </ul>
        `,
    Mailchimp: `
            <p class="popup-paragraph">
                Mi experiencia en Mailchimp se ha centrado en la creación y gestión de campañas de <strong>email marketing</strong>, así como en la automatización de procesos para mejorar la efectividad de las comunicaciones. Algunas de las tareas que he realizado incluyen:
            </p>
            <ul class="popup-list">
                <li>Diseño y ejecución de campañas de email marketing, incluyendo la creación de plantillas personalizadas y segmentación de audiencias</li>
                <li>Gestión y actualización de bases de datos, asegurando la correcta segmentación y personalización de los envíos</li>
                <li>Integración de Mailchimp con plataformas externas, como <strong>WordPress</strong>, para automatizar flujos de trabajo y mejorar la experiencia del usuario</li>
            </ul>
        `,
  };

  // Skills popup
  const items = document.querySelectorAll(".skill__item");

  const popup = document.getElementById("popup");
  const closeButton = document.querySelector(".popup-close");

  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const skill = item.getAttribute("data-skill");

      const title = item.querySelector(".skill__item h4").textContent;
      popupTitle.textContent = title;

      popupDescription.innerHTML = skillsDescriptions[skill];
      popup.classList.add("visible");
    });
  });

  closeButton.addEventListener("click", () => {
    popup.classList.remove("visible");
  });

  // cierra el popup cuando se da click afuera
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("visible");
    }
  });
});

// Agrega un evento de click a cada item de la lista de habilidades
function alternarDescripcion(element) {
  // Obtener el contenedor de la tarjeta que contiene la descripción
  var tarjeta = element.closest(".tarjeta-proyecto");

  // Encontrar el párrafo de la descripción dentro de esa tarjeta
  var descripcion = tarjeta.querySelector(".descripcion");

  // Alternar la clase "expanded" para cambiar el estilo
  if (descripcion.classList.contains("expanded")) {
    descripcion.classList.remove("expanded"); // Contraer
    element.textContent = "...ver más"; // Cambiar el texto del enlace
  } else {
    descripcion.classList.add("expanded"); // Expandir
    element.textContent = "...ver menos"; // Cambiar el texto del enlace
  }
}

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("clase__menu-principal");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active"); // Alterna la clase 'active' para mostrar u ocultar el menú
});







// VALIDACION FORMULARIO DE CONTACTO
const form = document.getElementById("contacto-formulario");
const botonEnviar = form.querySelector('button[type="submit"]');
export let datosFormulario = {};

botonEnviar.disabled = true;

//desabilitar el boton de enviar si hay errores
form.addEventListener("input", () => {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || correo === "" || asunto === "" || mensaje === "") {
    botonEnviar.disabled = true;
  } else {
    botonEnviar.disabled = false;
  }
});

//finalizar el envio del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  limpiarErrores();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;


  const errors = validacionFormulario(nombre, correo, asunto, mensaje);

  if (errors.length > 0) {
    mostrarErrores(errors);
  } else {
    enviarFormulario(nombre, correo, asunto, mensaje);
    limpiarFormulario();
  }
});

//envio del formulario
function enviarFormulario(nombre, correo, asunto, mensaje) {

  alert("Formulario enviado con éxito");
  console.log("enviando datos del formulario");
  datosFormulario = { nombre, correo, asunto, mensaje };
}

//validacion del formulario
export function validacionFormulario(nombre, correo, asunto, mensaje) {
  const errors = [];

  const nombreError = validarNombre(nombre);
  if (nombreError) {
    errors.push({ field: "nombre", message: nombreError });
  }
  const correoError = validacionCorreo(correo);
  if (correoError) {
    errors.push({ field: "correo", message: correoError });
  }
  const asuntoError = validarAsunto(asunto);
  if (asuntoError) {
    errors.push({ field: "asunto", message: asuntoError });
  }
  const mensajeError = validarMensaje(mensaje);
  if (mensajeError) {
    errors.push({ field: "mensaje", message: mensajeError });
  }

  return errors;
}

function validarNombre(nombre) {
  if (nombre.trim() === "") {
    return "El nombre no puede estar vacío.";
  } else if (nombre.length >= 50) {
    return "El nombre no debe tener mas de 50 caracteres";
  } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    return "El nombre solo puede contener letras y espacios.";
  }

  return null; // en caso de que no hayan errores
}

function validacionCorreo(correo) {
  if (correo.trim() === "") {
    return "El correo no puede estar vacío.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return "El correo no es válido. utiliza la estructura recomendada. Ejemplo:  texto@texto.com";
  }

  return null; // en caso de que no hayan errores
}

function validarAsunto(asunto) {
  if (asunto.trim() === "") {
    return "El asunto no puede estar vacío.";
  } else if (asunto.length >= 50) {
    return "El asunto no debe tener mas de 50 caracteres";
  } else if (!/^[a-zA-Z\s]+$/.test(asunto)) {
    return "El asunto solo puede contener letras y espacios.";
  }

  return null; // en caso de que no hayan errores
}

function validarMensaje(mensaje) {
  if (mensaje.trim() === "") {
    return "El mensaje no puede estar vacío.";
  } else if (mensaje.length >= 300) {
    return "El mensaje no debe tener mas de 300 caracteres";
  } else if (!/^[a-zA-Z\s]+$/.test(mensaje)) {
    return "El mensaje solo puede contener letras y espacios.";
  }

  return null; // en caso de que no hayan errores
}

function mostrarErrores(errors) {
  errors.forEach((error) => {
    const errorElements = document.querySelectorAll(`.error`);
    errorElements.forEach((element) => {
      if (element.parentNode.querySelector(`[name="${error.field}"]`)) {
        element.textContent = error.message;
      }
    });
  });
}

// Función para limpiar mensajes de error
function limpiarErrores() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.textContent = "";
  });
}

// limpiar formulariio
function limpiarFormulario() {
  document.getElementById("contacto-formulario").reset();
}
