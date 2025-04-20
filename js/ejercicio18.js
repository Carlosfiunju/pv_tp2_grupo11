import { cambiarTexto } from "../cambiarTexto.js";

const boton = document.getElementById("miBoton");
const parrafo = document.getElementById("miParrafo");

boton.addEventListener("click", () => {
  cambiarTexto(parrafo);
});
