        //Funções

function soma(a, b){
    //console.log(a + b)        //para evitar erros, melhor deixar com o return
    return a + b;
}

const loucura = soma(33, 77);    //para prever erros, é bom ter um return na função, para assim relacionar o resultado à uma variável.

console.log(loucura)


function sum(a, b = 10){    //O valor de b se tornou 10, mas caso não houvesse, seria 0. Menos em uma arrow, que resultaria em NuN
    return a + b
}

const massa = sum(18)       //Passando um parâmetro, será colocado no primeiro item. E como o b recebe 10, então resultado é 28

console.log(massa);

        //Arrows

//const somaArrowLonga = (c, d = 20) => {       Essa maneira é muito longa
//    return c + d
//}

//const somaLonga = somaArrowLonga(15)
//console.log(somaLonga)


const somaArrow = (a, b = 50) => a + b;      //É uma função já acoplada em uma variável, e que após o => corresponde ao return

const valorDaSoma = somaArrow(20);
console.log(valorDaSoma)



