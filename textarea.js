const textAreas = document.querySelectorAll('[data-message]');

textAreas.forEach(textArea => {
  textArea.addEventListener("blur", event => {
    const targetElement = event.target;
    const textareaValue = targetElement.value.trim();
    let errorSpan = targetElement.nextElementSibling;

    if (textareaValue === "") {
      console.log("El textarea está vacío. Realizar una acción...");
      // Realizar una acción específica para el textarea vacío
      
      // Verificar si ya existe un span de error, y si no, crearlo
      if (!errorSpan || !errorSpan.classList.contains("error-message")) {
        errorSpan = document.createElement("span");
        errorSpan.textContent = "Este campo es obligatorio";
        errorSpan.classList.add("error-message");
        targetElement.parentNode.insertBefore(errorSpan, targetElement.nextSibling);
      }
    } else {
      console.log("El textarea no está vacío. Realizar otra acción...");
      // Realizar otra acción específica para el textarea no vacío
      
      // Verificar si existe un span de error y, si existe, eliminarlo
      if (errorSpan && errorSpan.classList.contains("error-message")) {
        errorSpan.remove();
      }
    }
  });
});
