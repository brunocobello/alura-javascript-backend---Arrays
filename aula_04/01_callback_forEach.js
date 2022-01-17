// definindo o array de nomes
const nomes = ['Ana', 'Bia', 'Maria', 'Giovana', 'Priscila'];

//  função de call back imprimeNomes (uma função executada a partir de outra)
nomes.forEach(imprimeNomes);

// função para exibir os nomes
function imprimeNomes (nome) {
    console.log(nome.toUpperCase());
}

// mesmo exemplo do anterior, porém, com números
const numeros = [10, 20, 30];
numeros.forEach(aumentaUm);
function aumentaUm (numero) {
    console.log(numero + 1);
}