document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("botonColor");
  
    const colores = [
    //colores pasteles 
      "#ff9999", // rojo claro
      "#99ccff", // azul claro
      "#ccffcc", // verde claro
      "#ffff99", // amarillo
      "#ffccff", // rosa
      "#d9d9d9", // gris claro
      "#c2f0f7", // celeste pastel
      "#fce38a", // amarillo suave
    ];

    boton.addEventListener("click", () => {
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      document.body.style.backgroundColor = colorAleatorio;
      console.log("Color de fondo cambiado a:", colorAleatorio);
    });
  });
  