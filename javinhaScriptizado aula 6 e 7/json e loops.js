            //Transformando em JSON, então o const é só exemplo

const pessoas = [
    {
        id: 1,
        description: "Estudar Programação",
        isCompleted: true
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: false
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: false
    }
]

console.log(pessoas[2].isCompleted)

const virouJson = JSON.stringify(pessoas)   //Transformando em JSON, para poder mandar para um servidor, pois APIs não atendem à JavaScript, e sim JSON
const virouString = JSON.parse(virouJson)   //Transformando JSON em String de volta

//console.log(virouJson)
//console.log(virouString)

////////////////////////////////////////////////////////////////////////////////////

                //Loops

for(let index = 0; index < 10; index++){
    console.log(index)
}

//Tipo Excel
//Index recebe o valor 0; Enquanto/Quando index for menor que 10; index soma mais 1 após a primeira execução
//Algo tem um valor; Enquanto/Quando esse valor for algum; acontece algo na 2ª vez
//Valor / Condição / Ação
//A ação do log só vai acontecer, enquanto a operação for verdadeira

const cars = ["Mustang", "Tesla", "McLaren", "Supra"]

for(let i = 0; i < cars.length; i++){
//    console.log(cars[i])
}

//for of --- Outra maneira e mais simples de destacar essa lista:
for(let car of cars){
//    console.log(car)
}

//forEach - 3ª Maneira de fazer isso
cars.forEach((carro) => { //Para cada coisa dentro de cars, vai se chamar carro. O => substitui a palavra "Function", caso tivesse, seria cars.forEach(function(carro){console.log})
    console.log(carro)
})

        //While

let index = 0

while(index < 10){
    console.log("Index é menor do que 10!")
    index++ //ou index = index + 1 --- ou index += 1
}

        // for in

const person = {
    name: "Renata",
    age: 26
}

for (propriedade in person) {
//    console.log(propriedade) //Vai ler as propriedades em ordem
    console.log(person[propriedade]) //Vai ler as respostas de acordo com as propriedades em ordem
}