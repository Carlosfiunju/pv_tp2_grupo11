const boton = document.getElementById('retornarMes');

const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

boton.addEventListener('click', () => {
  const num = parseInt(prompt("Ingrese un numero entre 1 y 12"));
  if (num >=1 && num<=12) {
    alert(`El mes elegido es: ${meses[num-1]}`);
  } else {
    alert("Numero invalido");
  }
})