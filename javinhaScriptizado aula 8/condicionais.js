        //if else

const valor = 1 + 2;

if (valor === 2) {                  //Se () for true, então faz a linha abaixo
    console.log("O valor é 2!")
} else if (valor === 3) {           //Se () por false, mas esse novo () for true, então segue na linha abaixo
    console.log("O valor é 3!")
}
else {                            //Se () não for true, então cai aqui
    console.log("O valor não é 2 e nem 3!")
}

/////////////////////////////////////////////////////////////

//&&	"and" = "e" (adição de condição)
//||	"or" = "ou" (alternancia de condição, ou uma é true, ou outra
//==    igualdade no valor, mas o tipo não importa
//===   igualdade tanto no valor quanto no tipo

const valor1 = 1+1
const valor2 = 2+3

if (valor1 === 2 && valor2 === 4){
    console.log("valor 1 é 2 e o valor 2 é 4!")
}
else if (valor1 === 2 || valor2 === 6) {
    console.log("valor 1 é igual a 2, mas valor 2 não é igual a 6")
}

//////////////////////////////////////////////////////////////////////////

        //Ternary Operator
const soma = 3 + 3


let celoko = soma === 6 ? 6 : 8     //Após o =, é uma condição. Após o ?, será o valor caso a condição seja verdadeira. Após o :, será o valor caso a condição seja falsa

console.log("O valor de celoko é: " + celoko)


        //Switch

const car = "Supra"

switch (car) {
    case "McLaren":             //Caso car seja igual ao que está após o case, então vai para a próxima linha, caso não, vai para o próximo case
        console.log("McLaren é linda demais")
        break;              //é necessário dar break para não dar errado
    case "Mustang":
        console.log("Mustang é brabíssimo")
        break;
    case "Supra":
        console.log("Supra é inexplicavelmente lindo, rápido, e bravo")
}