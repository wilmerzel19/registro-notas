// Función para registrar las notas
function registrarNotas() {
    const registro = document.getElementById("registro");

    const form = document.createElement("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const materia = event.target.materia.value;
        const nota = parseFloat(event.target.nota.value);
        agregarNota(materia, nota);
        event.target.reset();
    });

    const materiaInput = document.createElement("input");
    materiaInput.setAttribute("type", "text");
    materiaInput.setAttribute("name", "materia");
    materiaInput.setAttribute("placeholder", "Nombre de la materia");
    form.appendChild(materiaInput);

    const notaInput = document.createElement("input");
    notaInput.setAttribute("type", "number");
    notaInput.setAttribute("name", "nota");
    notaInput.setAttribute("placeholder", "Nota (0-10)");
    form.appendChild(notaInput);

    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Registrar");
    form.appendChild(submitBtn);

    registro.appendChild(form);
}

// Función para agregar una nota a la tabla
function agregarNota(materia, nota) {
    const registro = document.getElementById("registro");

    const nuevaNota = document.createElement("p");
    nuevaNota.textContent = `Materia: ${materia} - Nota: ${nota}`;
    registro.appendChild(nuevaNota);
}

// Llamar a la función para registrar notas
registrarNotas();
