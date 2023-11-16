document.addEventListener("DOMContentLoaded", function () {
  const agregarTareaForms = document.querySelectorAll(".agregar-tarea-form");

  agregarTareaForms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nuevaTareaInput = form.querySelector("input[name=nuevaTareaPorHacer]");
      const nuevaTareaTexto = nuevaTareaInput.value.trim();

      if (nuevaTareaTexto !== "") {
        const nuevaTareaDiv = document.createElement("div");
        nuevaTareaDiv.classList.add("Tarea");

        const tareaTexto = document.createElement("span");
        tareaTexto.textContent = nuevaTareaTexto;

        const eliminarBtn = document.createElement("button");
        eliminarBtn.classList.add("btn", "btn-danger", "btn-sm", "eliminar-btn");
        eliminarBtn.textContent = "Eliminar";

        nuevaTareaDiv.appendChild(tareaTexto);
        nuevaTareaDiv.appendChild(eliminarBtn);

        const columnaTareas = form.closest(".columna-tareas");
        columnaTareas.insertBefore(nuevaTareaDiv, form);

        nuevaTareaInput.value = "";

        eliminarBtn.addEventListener("click", function () {
          const tareaDiv = eliminarBtn.closest(".Tarea");
          tareaDiv.remove();

        });
      }
    });
  });
});
async function fetchJoke() { 
  const results = await fetch(`https://api.chucknorris.io/jokes/random`);
  const data = await results.json();
      console.log(data.value);
} 
fetchJoke();
