const boton = document.getElementById('parImpar');

boton = addEventListener('click', () => {
    const num = parseInt(prompt("Ingrese un numero para saber si es par o impar"));

    if (num % 2 === 0) {
        alert(`El numero ${num} es PAR`)
    } else {
        alert(`El numero ${num} es IMPAR`)
    }
})