const notas = [10, 5, 8, 9, 4, 6, 10];

let somaNotas = 0;

notas.forEach(nota => {
    somaNotas += nota;
})

console.log(`A média final é ${(somaNotas/notas.length).toFixed(2)}`);