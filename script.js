const openNav = document.querySelector("[data-menuOpen]");
const closeNav = document.querySelector("[data-menuClose]");
const menuNav = document.querySelectorAll(".Nav__nav");
const openModal = document.querySelector("[data-loginOpen]");
const closeModal= document.querySelector("[data-loginClose]");
const modalLogin = document.querySelector("[data-modal]");
const button = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const textArea = document.querySelectorAll('[data-message]');
const loginButton = document.querySelector('[data-type="loginBtn"]');

const buttons = document.querySelectorAll('button');
/* 
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const clickedButton = event.target;
    event.preventDefault();
    console.log("click:", clickedButton);
    // Acceder al elemento específico en el que se hizo clic (clickedButton)
    // Realizar la acción deseada en ese elemento
  });
}); */



/* loginButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  var targetElement = event.target;
  console.log("click:", targetElement);
  // Realizar acciones adicionales con el elemento de destino (targetElement)
}); */

openNav.addEventListener("click", () => {
  menuNav.forEach((menu_element) => menu_element.classList.add("active"));
});

closeNav.addEventListener("click", () => {
  menuNav.forEach((menu_element) => menu_element.classList.remove("active"));
});

openModal.addEventListener("click", () => {
  modalLogin.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modalLogin.style.display = "none";
});

/* button.forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    var targetElement = event.target;
    console.log("click:", targetElement);
    var inputValue = targetElement.value;
    var dataType = targetElement.getAttribute("data-type");
    console.log("btn Value:", inputValue,dataType);
    
  });
}) */;

inputs.forEach(function(input) {
  input.addEventListener("blur", function(event) {
    var targetElement = event.target;
    var inputValue = targetElement.value;
    var dataType = targetElement.getAttribute("data-type");
  console.log("selected", "datatype:",dataType, "value:", inputValue,isValid);

    // Validar
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
    if (!isValid && targetElement.getAttribute("data-type") !== "search") {
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

textArea.forEach(function(textArea) {
  textArea.addEventListener("blur", function(event) {
    const targetElement = event.target;
    const textareaValue = targetElement.value.trim();
    let errorSpan = targetElement.nextElementSibling;

    if (textareaValue === "") {
      console.log("El textarea está vacío. Realizar una acción...");

      if (!errorSpan || !errorSpan.classList.contains("error-message")) {
        errorSpan = document.createElement("span");
        errorSpan.textContent = "Este campo es obligatorio";
        errorSpan.classList.add("error-message");
        targetElement.parentNode.insertBefore(errorSpan, targetElement.nextSibling);
      }
    } else {
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
; // Seleciona el botón de acceso
const userEmail = "alura@alurageek.com";
const userPassword = "alurageek";


var emailInput = document.querySelector('[data-type="email"]').value;
var passwordInput = document.querySelector('input[data-type="password"]').value;


// Variables guardadas para comparar
var savedEmail = "example@example.com";
var savedPassword = "secretpassword";



// Event listener para el botón de envío
button.forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    var targetElement = event.target;
    console.log("click:", targetElement);
    var inputValue = targetElement.value;
    var dataType = targetElement.getAttribute("data-type");
    console.log("btn Value:", inputValue,"datatype:",dataType,"read value:" ,emailInput,);
    var valid = (emailInput.trim() !== "") && (passwordInput.trim() !== "");

  emailInput.placeholder = valid ? "Correo electrónico" : "Ingresa un correo electrónico";
  passwordInput.placeholder = valid ? "Contraseña" : "Ingresa una contraseña";

  
  if (valid) {
    // Comparar valores con variables guardadas
    var accessGranted = (emailInput === savedEmail) && (passwordInput === savedPassword);
    if (accessGranted) {
      alert("Inicio de sesión exitoso. ¡Bienvenido!");
      modal.style.display = "none";
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo nuevamente.");
    }
  }
})})
loginButton.addEventListener('click', function(event) {
  event.preventDefault(); 

  // Obtener los valores de los campos de correo electrónico y contraseña
  var emailInput = document.querySelector('[data-type="email"]').value;
  var passwordInput = document.querySelector('input[data-type="password"]').value;

  // Validación de campos
  var valid = (emailInput.trim() !== "") && (passwordInput.trim() !== "");
  
  if (valid) {
    // Comparar los valores ingresados con las variables guardadas
    var accessGranted = (emailInput === savedEmail) && (passwordInput === savedPassword);
    if (accessGranted) {
      alert("Inicio de sesión exitoso. ¡Bienvenido!");
      modalLogin.style.display = "none"; // Cerrar el modal de inicio de sesión
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo nuevamente.");
    }
  } else {
    // Mostrar mensaje de error si alguno de los campos está vacío
    alert("Por favor, completa todos los campos.");
  }
});
