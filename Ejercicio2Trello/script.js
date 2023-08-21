const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `Cerrando pagina\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);

// Función: crea un nuevo párrafo y lo agrega al final del cuerpo HTML.

function createParagraph() {
    let para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
  /*
    1. Obtiene referencias de todos los botones de la página en un formato de arreglo.
    2. Recorre todos los botones y agrega un detector de eventos 'click' a cada uno.
  
    Cuando se presione cualquier botón, se ejecutará la función createParagraph().
  */
  
  const buttons = document.querySelectorAll("button");
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", createParagraph);
  }
  document.addEventListener("DOMContentLoaded", function () {
    const formElements = document.querySelectorAll("form"); // Selecciona todos los formularios de la página
    formElements.forEach(function (form) { // Recorre todos los formularios
      form.addEventListener("submit", function (event) { // Agrega un detector de eventos 'submit' a cada formulario
        event.preventDefault(); // Evitar el envío del formulario
  
        const nuevaTareaInput = form.querySelector("input[name=nuevaTareaPorHacer]");// Selecciona el campo de entrada de texto
        const nuevaTareaTexto = nuevaTareaInput.value.trim();  // Obtiene el texto del campo de entrada de texto
  
        if (nuevaTareaTexto !== "") {     // Si el texto no está vacío
          const nuevaTareaDiv = document.createElement("div"); // Crea un nuevo elemento div
          nuevaTareaDiv.classList.add("Tarea"); // Agrega la clase 'Tarea' al elemento div
          nuevaTareaDiv.textContent = nuevaTareaTexto; // Agrega el texto del campo de entrada de texto al elemento div
  
          const columnaTareas = form.closest(".columna-tareas"); // Selecciona la columna de tareas más cercana al formulario
          columnaTareas.insertBefore(nuevaTareaDiv, form); // Inserta el elemento div antes del formulario
  
          nuevaTareaInput.value = ""; // Limpiar el campo de entrada
          
      

        }
      });
    });
  });

  
  