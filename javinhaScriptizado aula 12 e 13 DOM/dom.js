//////////////////////////////////////////////////////////////////////////////////
                                //Selecionar


            //Apenas um elemento

//const addUserText = document.getElementById('add-user')
//addUserText.textContent = "Sem maldade"               Só funciona com getElementByID

//const addUserText = document.querySelector('#add-user')   //Precisa declarar se é ID com #, ou class com .
//addUserText.textContent = "Sem maldade"

//const addUserText = document.querySelectorAll('form')   //Não tem nem innerText, e nem textContent


//const addUserText = document.querySelector('#add-user')

//console.log(addUserText);           //nunca um ; foi tão necessário até esse momento. Espero que se torne um costume de pôr isso.



            //Selecionar múltiplos elementos

//const addUserText = document.getElementByClassName('nomes')   Pega apenas class, porém não retorna em uma lista, dificultando na manipulação

//const titulasso = document.getElementsByTagName("h1")        //Pega apenas pela Tag, porém não retorna em uma lista, dificultando na manipulação


//const allItems = document.querySelectorAll("#add-user")

//console.log(allItems[1])


//////////////////////////////////////////////////////////////////////////////////
                                //Manipular

const primeiro = document.querySelector("#add-user"); //selecionei

primeiro.remove();          //Remove o que foi selecionado como "primeiro"

const muitos = document.querySelector("#items");        //Da forma como vou fazer, só funciona com elementos "pais", que dentro delas há várias
console.log(muitos)

muitos.firstElementChild.remove()       //remove o primeiro elemento filho
muitos.lastElementChild.remove()        //remove o ultimo elemento filho



muitos.children[0].textContent = "Segundo item" //é o 0, pois o que era 0 antes foi removido. É possivel usar os [] mesmo sendo um html que não é lista

muitos.lastElementChild.innerHTML = "<h1>Código original foi destruído pela aula</h1>" //inseriu o ultimo elemento filho não destruído dentro do HTML, e recebeu um valor que o transformou em um h1
 

const botão = document.querySelector(".button");

console.log(botão)

botão.style.background = "red"      //consegue mudar o style de algo no Html dentro do JS
