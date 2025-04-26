document.addEventListener("DOMContentLoaded", () => {
    const inputTexto = document.getElementById("inputTexto");
    const textoMostrado = document.getElementById("textoMostrado");
  
    inputTexto.addEventListener("input", () => {
      const texto = inputTexto.value;
      textoMostrado.textContent = texto;
  
      if (texto.length > 20) {
        textoMostrado.style.backgroundColor = "#ff0000"; // rojo
      } else {
        textoMostrado.style.backgroundColor = "white";
      }
    });
  });