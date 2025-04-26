const retornarMes = () => {
    const numero = parseInt(document.getElementById("numeroMes").value);
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const resultado = document.getElementById("resultado");
  
    if (numero >= 1 && numero <= 12) {
      resultado.textContent = "El mes es: " + meses[numero - 1];
    } else {
      resultado.textContent = "Eso no corresponde a un mes del año.";
    }
  }  