
document.getElementById("contacto-formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Limpiar mensajes de error previos
    clearErrors();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    const errors = validateForm(nombre, correo, asunto, mensaje);

    if (errors.length > 0) {
        displayErrors(errors);
    } else {
        // Si todas las validaciones pasan
        console.log("Nombre: " + nombre);
        console.log("Correo: " + correo);
        console.log("Asunto: " + asunto);
        console.log("Mensaje: " + mensaje);
        // Aquí puedes enviar el formulario o realizar otra acción
    }
});

// Función para validar el formulario
function validateForm(nombre, correo, asunto, mensaje) {
    const errors = [];

    // Validación del campo nombre
    const nombreError = validateNombre(nombre);
    if (nombreError) {
        errors.push({ field: "nombre", message: nombreError });
    }

    return errors;
}

// Función para validar el campo nombre
function validateNombre(nombre) {
    if (nombre.trim() === "") {
        return "El nombre no puede estar vacío.";
    } else if (nombre.length < 3) {
        return "El nombre debe tener al menos 3 caracteres.";
    } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        return "El nombre solo puede contener letras y espacios.";
    }
    return null; // Sin errores
}

// Función para mostrar los errores
function displayErrors(errors) {
    errors.forEach(error => {
        const errorElement = document.getElementById(`error-${error.field}`);
        errorElement.textContent = error.message;
    });
}

// Función para limpiar mensajes de error
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

// Función para validar el formato del correo electrónico