// definindo o array de nomes
const nomes = ['Ana', 'Bia', 'Maria', 'Paula', 'Priscila', 'Giovana'];

// utilizando o map para percorrer o array e transformar em maiusculas
const transformaMaiuscula = nomes.map (no => "== " + no.toUpperCase());

// exibindo na tela
console.log(`Todos os alunos em maiúsculas ${transformaMaiuscula}`);