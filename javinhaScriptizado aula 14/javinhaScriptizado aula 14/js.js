const submit = document.querySelector("#button");
const nameInput = document.querySelector("#nome");
const lastnameInput = document.querySelector("#lastname")
const emailInput = document.querySelector("#email")
const formulario = document.querySelector(".form")
const quallado = document.querySelector("#quallado")
const senerioridade = document.querySelector(".divradio")
const conte = document.querySelector("textarea")

submit.addEventListener("click", function(event){   //O "click" é um evento, existem vários. O addEventListener vai "escutar" alguma atualização, seja por escrito ou por clique (que é a nossa situação)

    event.preventDefault()      //isso cancela o funcionamento padrão do botão

    const nameValue = nameInput.value;  //No arquivo anterior, estava dando erro, pois no HTML eu coloquei o ID nome dentro do label, e não do input.
    const lastnameValue = lastnameInput.value;
    const emailValue = emailInput.value;
    
    console.log(nameValue);
    console.log(lastnameValue);
    console.log(emailValue)

    if (nameValue === "" || lastnameValue === "" || emailValue === "") {
        return alert("Preenche direito isso ae")    //return pois, caso apareça essa mensagem, não vá para a linha abaixo. Caso não venha para o return, vai passar direto.
    }
    //Só vai acontecer o que estiver aqui embaixo, caso não vá para o alert, como se existisse um else invisível, o return deixa isso possível

    formulario.style.background = "blue" //Caso não vá para o return, então virá para essa linha. Caso vá para o alert, então não virá
    conte.style.background = "yellow"

    quallado.textContent = "OPA"
    senerioridade.firstElementChild.textContent = nameValue;
    senerioridade.lastElementChild.textContent = emailValue;
    senerioridade.children[1].textContent = lastnameValue;

})

//nameInput.addEventListener("change", function(event) {      //Qualquer atualização será lançada no console antes de enviar pelo botão. O change é um evento, existem vários
//    console.log(event.target.value);
//})

