var inputs = document.querySelectorAll("form input");

inputs.forEach(function(input) {
  input.addEventListener("blur", function(event) {
    var targetElement = event.target;
    var inputValue = targetElement.value;
    var dataType = targetElement.getAttribute("data-type");

    // Validación de campos
    var isValid = true;
    var errorMessage = "";

    if (inputValue.trim() === "") {
      isValid = false;
      errorMessage = "Este campo es obligatorio.";
    } else {
      if (dataType === "email" && !isValidEmail(inputValue)) {
        isValid = false;
        errorMessage = "Ingresa un correo electrónico válido.";
      }

      if (dataType === "password" && !isValidPassword(inputValue)) {
        isValid = false;
        errorMessage = "La contraseña debe tener al menos 8 caracteres.";
      }
    }

    // Mostrar mensaje de error
    if (!isValid) {
      var errorSpan = targetElement.nextElementSibling;
      if (errorSpan && errorSpan.classList.contains("error-message")) {
        errorSpan.textContent = errorMessage;
      } else {
        errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        errorSpan.textContent = errorMessage;
        targetElement.parentNode.insertBefore(errorSpan, targetElement.nextSibling);
      }
    } else {
      var errorSpan = targetElement.nextElementSibling;
      if (errorSpan && errorSpan.classList.contains("error-message")) {
        errorSpan.remove();
      }
    }
  });
});

// Función de validación de correo electrónico
function isValidEmail(email) {
  // Implementa tu lógica de validación de correo electrónico
  // Retorna true si el correo es válido, false en caso contrario
  // Ejemplo simple para verificar si contiene un "@" y al menos un punto después del "@"
  return email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".");
}

// Función de validación de contraseña
function isValidPassword(password) {
  // Implementa tu lógica de validación de contraseña
  // Retorna true si la contraseña es válida, false en caso contrario
  // Ejemplo simple para verificar que tenga al menos 8 caracteres
  return password.length >= 8;
}
