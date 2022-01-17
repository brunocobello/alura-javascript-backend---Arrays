// crando o array de nomes
const nomes = ['Ana', 'Maria', 'Xuxa'];
// criando o array de notas
const notas = [5, 9, 10];

// criando o array com 2 dimensoes
const resultado = [nomes, notas];

// fazendo a validacao de exibicao
// includes procura por um conteúdo dentro do Array e retorna true (encontrado) ou false (não encontrado)
// indexOf procura por um conteúdo dentro do Array e retorna o indice (encontrado) ou -1 (não encontrado)

const exibindo = (nomeDoAluno) => {
    if ( resultado[0].includes(nomeDoAluno) ) {
        let indice = resultado[0].indexOf(nomeDoAluno);
        return `${resultado[0][indice]}, sua nota final é ${resultado[1][indice]}.`;
    } else {
        return 'Este aluno não foi encontrado em nossa base de dados';
    }
}

console.log(exibindo('Maria'));