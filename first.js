document.addEventListener("DOMContentLoaded", () => {
    const taskButton = document.getElementById("taskButton");
    const progressContainer = document.getElementById("progressContainer");
    const progressCircle = document.getElementById("progressCircle");
    const contentLocker = document.getElementById("contentLocker");
    const step1 = document.getElementById("step1"); // Añadir la referencia al span del número de paso

    let step = 1; // Variable para llevar el conteo de los pasos

    taskButton.addEventListener("click", (event) => {
        // Mostrar barra de carga
        progressContainer.style.display = "flex";
        progressContainer.classList.remove("completed"); // Reiniciar la barra de progreso
        progressCircle.innerHTML = ""; // Limpiar el check

        // Esperar 15 segundos para completar la barra de progreso
        setTimeout(() => {
            progressContainer.classList.add("completed");
            progressCircle.innerHTML = "✔"; // Agregar check verde

            // Cambiar texto del botón a "Done" y cambiar su color a verde
            contentLocker.textContent = "Done";
            contentLocker.classList.add("done");

            // Eliminar cualquier animación de vibración
            contentLocker.classList.remove("vibrate");
        }, 25000);
    });

    contentLocker.addEventListener("click", () => {
        if (contentLocker.textContent === "Done") {
            step++; // Aumentar el contador de pasos
    
            // Actualizar el número de paso en el span
            step1.textContent = step; // Cambiar el número del paso

            if (step < 5) {
                // Cambiar texto del botón a "Continue" con el paso actual
                contentLocker.textContent = `Step ${step} of 5`;
                contentLocker.classList.remove("done");
                progressContainer.style.display = "none"; // Ocultar la barra de progreso
            } else if (step === 5) {
                // En el paso 5, cambiar texto a "Step Final"
                contentLocker.textContent = "Step Final";
                contentLocker.classList.remove("done");
                progressContainer.style.display = "none"; // Ocultar la barra de progreso
            } else {
                // Ocultar las tareas y mostrar el iframe
                document.querySelector(".container").style.display = "none"; // Ocultar la tarea
                document.getElementById("iframeContainer").style.display = "block"; // Mostrar el iframe
            }
        } else {
            // Solo permitir vibrar si el texto no es "Done"
            contentLocker.classList.add("vibrate");
    
            // Eliminar la clase después de la animación para poder reutilizarla
            setTimeout(() => {
                contentLocker.classList.remove("vibrate");
            }, 400); // Duración de la animación (0.2s * 2 repeticiones)
        }
    });    
});
