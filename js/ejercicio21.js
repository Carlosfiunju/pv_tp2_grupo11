document.addEventListener("DOMContentLoaded", () => {
    const inputTexto = document.getElementById('inputTexto');
    const mostrarTexto = document.getElementById('mostrarTexto');

    inputTexto.addEventListener('input', () => {
        texto = inputTexto.value;
        mostrarTexto.textContent = texto;
    })
})