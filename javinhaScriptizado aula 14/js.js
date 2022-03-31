const submitButton = document.querySelector(".button");
const nameInput = document.querySelector("#firstname");
const emailInput = document.querySelector("#email");
const formulario = document.querySelector(".form");

    //eventos click e change (existem vários)

submitButton.addEventListener("click", function(event){     //click é um evento de clicar. O evento escuta algo, e isso foi o clique no botão

    event.preventDefault();     //cancelei a função normal de envio e de recarregar a página

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "") {     //Tentei com "" para representar vazio, porém no meu teste no google chrome, só foi considerado quando coloquei undefined
        console.log(nameValue);
        return alert("preenche direito ae campeão"); //return para que caso esse ocorra, não faça o de baixo
    }
    console.log(nameValue);
    formulario.style.background = "blue";
});

//firstnameInput.addEventListener("change", function(event){  //change é um evento. Escuta o evento de mudança do input
//    console.log(event.target.value);                        //qualquer mudança altera com o target
//})

