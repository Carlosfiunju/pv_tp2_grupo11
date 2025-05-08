const edades = [8, 14, 16 ,22, 26, 78, 42, 66]
let sumaedad = 0;
edades.forEach(edad => {
    sumaedad = sumaedad + edad;
})

console.log(`Promedio: ${sumaedad/edades.length}`);