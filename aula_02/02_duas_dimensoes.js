// criando array de nomes
const nomes = ['Ana', 'Maria', 'Xuxa'];
//criando array de notas
const notas = [5, 10, 8];

// criando o array com 2 dimensões
const bimestre = [nomes, notas];

// exibe a vida como ela é ==> dentro de 1 array existem outros 2
console.log(bimestre);

// acessando, através do array bidimensional, o nome Maria
console.log('Acessando, através do array bidimensional, 1 nome');
console.log(bimestre[0][1]);

// concatenando e exibindo através de índices bidimensionais
console.log('Concatenando e exibindo através de índices bidimensionais');
console.log(`${bimestre[0][2]}, sua nota é ${bimestre[1][2]}`);