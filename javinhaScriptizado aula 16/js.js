const nameInput = document.querySelector("#nome")
const lastnameInput = document.querySelector("#lastname")
const emailInput = document.querySelector("#email")
const botao = document.querySelector("#button")
const errorMessage = document.querySelector(".msg")
const items = document.querySelector(".items")

botao.addEventListener("click", function(event) {

    event.preventDefault()

    const nameValue = nameInput.value;
    const lastnameValue = lastnameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === "" || lastnameValue === "" || emailValue === ""){
        errorMessage.textContent = "Por favor, preencha corretamente os campos"
        errorMessage.classList = "error"

        setTimeout(function(){   //em 3 segundos (3000 ms) apagará a mensagem de erro. Onde está a function é o que acontece, e após a "," é em quanto tempo. Logo, poderia ser trocado por setTimeout(() => { blabla fica vazio }, 3000)
            errorMessage.textContent = ""
            errorMessage.classList = ""
        }, 3000)
        return
    }

    const li = document.createElement("li")
    li.innerHTML = `Nome: ${nameValue}, Sobrenome: ${lastnameValue},<br> Email: ${emailValue}` //Aqui precisou ser innerHTML pois queria pular uma linha para separar o email. Como o \n não funciona nessa situação, dava para correr atrás do <br> do html, por isso o innerHTML
    li.classList = "error"

    items.appendChild(li)       //Aqui estou adicionando um filho no HTML que foi criado no JS    

    nameInput.value = ""        //Não entendi do porque os nameValue não funcionam aqui, apenas o varInput.value
    lastnameInput.value = ""
    emailInput.value = ""

})