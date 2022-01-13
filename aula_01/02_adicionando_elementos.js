// construindo o array inicial
const numeros = [10, 7.5, 8, 6.5];

// push - acrescentando número no final do array
numeros.push(5);

// exibindo o array com o elemento 5 no final
console.log('Exibindo o array com o número 5 acrescentado no final');
console.log(numeros);



// pop() - removendo o último elemento de um array
numeros.pop();

// exibindo o array após ter removido o número 5 do final do array
console.log('Exibindo o array após ter removido o número 5 do final do array');
console.log(numeros);



// unshift - acrescentando um elemento no inicio do array
numeros.unshift(100);

// exibindo o array após ter adicionado o número 100 no inicio do array
console.log('Exibindo o array após ter adicionado o número 100 no inicio do array');
console.log(numeros);



// shift - removendo o primeiro elemento no inicio do array
numeros.shift();

// exibindo o array após ter removido o número 100 do início do array
console.log('Exibindo o array após ter removido o número 100 do início do array');
console.log(numeros);



// splice - acrescentando elementos no meio de um array
numeros.splice(2,0,150);

// exibindo o array após ter inserido o número 150 no indice 2, após o 7.5
console.log('Exibindo o array após ter inserido o número 150 no indice 2, após o 7.5');
console.log(numeros);



// slice - fatiando um array e exibindo apenas uma parte
let sliceArray = numeros.slice(2,4)
sliceArray = numeros.slice(3);
sliceArray = numeros.slice(-3);

// exibindo uma fatia do array. O segundo parâmetro (3) indica o indice não exibido
console.log('Exibindo uma fatia do array. O segundo parâmetro (3) indica o indice não exibido');
console.log(sliceArray);

// calculando a media
const mediaFinal = (numeros[0] + numeros[1] + numeros[2] + numeros[3]) / numeros.length;


// exibindo na tela
console.log(`A media final é ${mediaFinal}`);