        //Objeto

const pessoa = {
    firstname: "Gabriel",
    lastname: "Plautz",
    idade: "19",
    hobbies: ["Jogar", "Assistir séries", "Assistir Vídeos"],
    animal: {                       //adicionando um objeto dentro de um objeto
        tipo: "gato",
        idade: 1
    }
}

//const firstName = pessoa.firstname;
//const lastname = pessoa.lastname;
//const idade = pessoa.idade;
//const hobbies = pessoa.hobbies;

//O que está acima funciona, mas pode ser substituído por Destructuring:
//O firstname: nome está nomeando nome como const do firstname já definido dentro do objeto
const {firstname: nome, lastname: sobrenome, idade, hobbies, animal: {tipo: tipoDeAnimal}} = pessoa //Ao apertar ctrl + Espaço, aparece todas as opções dentro do objeto



console.log(nome)
console.log(sobrenome)
console.log(idade)
console.log(hobbies);

        //Desafio de selecionar o último hobbie

console.log(hobbies[2])

//pessoa.animal = "gato";   é adicionado na lista, mas não parece ser organizado

console.log(tipoDeAnimal)
console.log(pessoa.animal.tipo)



//////////////////////////////////////////////////////////////////////////

const tarefa = [
    {
        id: 1,
        description: "Estudar Programação",
        isCompleted: false
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: false
    },
    {
        id: 3,
        description: "Fazer questões",
        isCompleted: true
    }
];

        //Desafio: acessar a última informação do último ID

//console.log(tarefa[2].isCompleted)
// esse de cima é mais fácil, mas por algum motivo não foi esse feito no vídeo

const completeUltimoItem = tarefa[2].isCompleted

console.log(completeUltimoItem)






