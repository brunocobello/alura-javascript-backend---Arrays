const notas = [10, 7.5, 8, 6.5];

let somaNotas = 0;

for (let i=0; i<notas.length; i++) {
    somaNotas += notas[i];
}

console.log(`A média final é ${somaNotas/notas.length}`);