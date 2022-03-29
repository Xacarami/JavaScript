        //Truthy e Falsy

    //False

const zoio = ''             //Valor vazio é falso
const narina = 0            //Valor 0 também é falso
const dedo = null           //Valor nulo é falso
const retina = undefined    //Valor indefinido também é falso

console.log(!!zoio);        //o !! dirá se é verdadeiro ou falso
console.log(!!narina);
console.log(!!dedo);
console.log(!!retina)

if (zoio) {                 //Se zoio for um valor verdadeiro (o que não vai acontecer):
    console.log(zoio)
}

if (narina) {
    console.log(narina)
}

    //True

const list = []             //Listas vazias são True
const objeto = {}           //Objetos vazios são True

console.log(!!list)
console.log(!!objeto)

if (list) {
    console.log("A lista vazia é True")
};

if (list.length === 0) {
    console.log("0 em uma lista também é true") //A lista ter 0 de tamanho é true.
};

if (list.lenght > 0){
    console.log("Não deve ser true caso a lista esteja vazia") //É o melhor jeito para saber se há algo na lista, e se sim, quantas, e se não, só não passará para a próxima linha
}

console.log(!zoio + " A não ser que seja invertido o valor do bool") //O ! com um booleano inverte seu valor

if (!list) {
    console.log(list) //Nunca será verdadeira, pois uma lista vazia é True, e o ! inverte para false
}