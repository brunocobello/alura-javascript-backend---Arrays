// define o array de nomes
const nomes = ['Bruno', 'Giovana', 'Priscila'];
// define o array de notas na tela
const notas = [4, 10, 9];

// filtra os alunos reprovados
// para uma variavel não utilizada, é possível defini-la com _ (underscore)
const reprovados = nomes.filter( (_, indice) => notas[indice] < 5);

// exibe a mensagem dos reprovados na tela
if (reprovados.length > 0)
    console.log(`Os alunos reprovados são: ${reprovados}`)
else
    console.log('Não temos alunos reprovados');

// quando encontra, retorna o valor procurado
const verificaExistencia = nomes.filter(nome => nome === 'Bruno');
// exibe o valor encontrado na tela
console.log(verificaExistencia);