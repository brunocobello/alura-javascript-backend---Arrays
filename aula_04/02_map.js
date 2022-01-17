// definindo o array de notas
const notas = [10, 9, 8, 7, 6];

// map - percorre o array gerando um retorno em um novo array (add 1 para notas menores que 10)
const notasAtualizadas = notas.map ( nota => nota <= 9 ? ++nota : nota);

// exibindo o resultado na tela
console.log(`As notas dos alunos são: ${notasAtualizadas}`);

// utilizando map com mais de uma linha e sendo necessário usar o return
const nova = notas.map( n => {
    if(n > 9 || n < 8) {
        n;
    } else {
        ++n;
    }
    return n;
})

console.log(nova);