const salaJS = [10, 10, 8];
const salaJava = [5, 7, 10, 10, 9];
const salaPython = [6, 10, 10, 10, 9];

function calculaMedia (nomeSala) {
    const resultado = nomeSala.reduce( (acumulo, atual) => atual + acumulo, 0);
    return resultado / nomeSala.length;
}

console.log(`A media da sala de JS é: ${calculaMedia(salaJS)}`);
console.log(`A media da sala de Java é: ${calculaMedia(salaJava)}`);
console.log(`A media da sala de Python é: ${calculaMedia(salaPython)}`);

// o último valor da linha 15 (0 -> zero) indica o valor inicial de acumulo
const teste = salaJS.reduce( (acumulo, atual) => acumulo + (atual * 2), 0);
console.log(teste);