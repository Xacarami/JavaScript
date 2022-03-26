            //map
const numbers = [1, 2, 3, 4, 5];

const multiplicado = numbers.map(function(item){ //Criado uma função, e o map analisa um por um dentro da lista
    return item * 2

})

console.log(multiplicado)

            //Filter

const idade = [1, 5, 7, 10, 18, 30, 47] //#Dica: Ctrl + D várias vezes para selecionar coisas iguais, como para remover os ''

 const pares = idade.filter(function(idades){
    return idades % 2 == 0  //Função que quando o resto de uma divisão por 2 é 0, ele é par, e então é selecionado

 })

console.log(pares)

            //Reduce

const somaDeIdades = idade.reduce(function(idade, accumulator){ //função para somar todas as idades
    return accumulator + idade;

}, 0)       //0 como valor inicial do accumulator, porém sem esse ', 0' tinha dado certo também -- a ideia é que esse 0 se tornasse o próximo numero da lista, e com a função ele fosse somado com o próximo, e esse resultado estaria no lugar do 0, e assim até terminar. Isso é por estar dentro do reduce, que precisa de um valor novo (idade, que começa com 1 no exemplo) e um valor inicial (accumulator). Caso o 0 fosse 100, então teria uma soma de 100

console.log(somaDeIdades)



const total = idade.reduce(ageTotal, 0);
function ageTotal(age, accumulator){
	return age + accumulator;
}

console.log(total)

        //Exercício nos comentários

    // 1 - Somar todos os números de 1 a 50
    // 2 - Somar todos os números pares de 1 a 50

const umCinquenta = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

const somaTudo = umCinquenta.reduce(function(numero, acumulador){
    return numero + acumulador

}, 0)

const par = umCinquenta.filter(function(numero){
    return numero % 2 == 0

})

const numeroPar = par.reduce(function(item, predio){
    return item + predio
}, 0)

console.log(somaTudo)
console.log(numeroPar)