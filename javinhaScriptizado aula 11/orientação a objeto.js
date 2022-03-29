        //Classes = impressoras de objetos

class Person {              //Pode haver várias classes
    constructor(firstName, lastName, age){      //propriedades dentro da Person
        this.firstName = firstName              //O this transforma o que tá após o . em algo que pode ser chamado tanto em (), quanto usando variavel.apósOThis. No w3schools, em um objeto é chamado de referencia ao obejto. Sozinho e em uma função é um objeto global
        this.lastName = lastName
        this.age = age
    }

    nomeInteiro(){          //chamado de método. Quando chamado, junta o first com last name
        console.log(`${this.firstName} ${this.lastName}`)   //Só acontece quando nomeInteiro for chamado. E só é chamado com variável.nomeInteiro
    }
}

const pessoa = new Person("Gabriel", "Plautz", "19")    //keyword "new" chama o pessoa como uma nova person, dizendo que pessoa é um objeto e já atribui os seus atributos dentro de ()
console.log(pessoa)
//console.log(typeof(pessoa)) //é um objeto

pessoa.nomeInteiro()


/////////////////////////////////////////////////////////////////////////

        //Método Estático

class Person2 {              //Pode haver várias classes
    constructor(firstName, lastName, age){      //propriedades dentro da Person
        this.firstName = firstName              //O this transforma o que tá após o . em algo que pode ser chamado tanto em (), quanto usando variavel.apósOThis. No w3schools, em um objeto é chamado de referencia ao obejto. Sozinho e em uma função é um objeto global
        this.lastName = lastName
        this.age = age
    }

    static speak() {
        console.log("Por ser um método Estático, ele não acessa os this, ele nunca muda, então a meneira de chamá-lo é diferente")
    }
}

Person2.speak()


/////////////////////////////////////////////////////////////////////////

        //Heranças

class Animal {              //Pode haver várias classes
    constructor(nomeAnimal){      //propriedades dentro da Person
        this.nomeAnimal = nomeAnimal
    }

    falar() {                   //Quando tem static antes do falar(), ele não consegue pegar os this
        console.log(`${this.nomeAnimal} fez algum barulho!`)
    }
}

const animal1 = new Animal("Quimera");

animal1.falar();


class gato extends Animal{      //A classe cachorro está dentro da classe Animal, logo, tudo que está dentro da animal, vai acontecer com a subclasse. Porém, algumas coisas podem se sobrescrever
    constructor(nomeAnimal){    //precisa receber os mesmos parâmetros da classe anterior
        super(nomeAnimal)       //super porque ele tem que pega o item nomeAnimal da classe anterior que é maior
    }
    speak(){                    //consegue acessar o this pois não é static
        console.log(`${this.nomeAnimal} miou!`)
    }
}

const quimera = new gato("Quimera")
quimera.speak()

