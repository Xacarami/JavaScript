const names = ['Gabriel', 'Lucas', 'Pablo', 10, false];

const nome_random = names[2];

console.log(nome_random);

names.push("Paulo") //usado para adicionar no fim da lista (foi removido pelo names.pop)

names.shift() //usado para remover o primeiro item da lista - removido Gabriel

names.unshift("Gustavo"); // usado para adicionar no começo da lista

names.pop() //usado para apagar o último valor da lista
names.pop()
names.pop()

names[2] = 'Fernando' //usado para substituir um valor. Gabriel foi removido, Gustavo foi colocado no início, então o [2] era Pablo, que foi substituído

names.unshift("Zezinho");

console.log(names.indexOf("Lucas")); // Usado para achar a posição do valor em uma lista

console.log(names);

console.log(names.sort()); //Usado para ser organizar a lista em ordem alabetica

console.log(names.length + " itens dentro da lista"); //Usado para contar quantidade de itens em uma lista, ou provavelmente os caracteres de uma variável


const nameIsArray = Array.isArray(names) //Ele me diz se o que eu selecionei é uma array ou não. Se eu puxasse o indexOf, sairia false, pois me retornaria um número.
const indexOfe = Array.isArray(names.indexOf("Lucas"))

console.log(nameIsArray) //True ou False se for ou não um Array/String
console.log(indexOfe)


//recomendado ver depois. Variáveis .map e .filter