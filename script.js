let lista = document.querySelector("ul");
let corpo = document.querySelector("body");

let raizes =[
    {nome:"Chaves"},
    {nome:"Chapolin Colorado"},
    {nome:"Batata Frita"},
    {nome:"Pudim"},
    {nome:"Formiga"},
    {nome:"Aranha"},
    {nome:"Buenos Aires"}
];

let imprimirComidas = (cor) =>{
    for(let raiz of raizes){
        lista.innerHTML +=`<li>${raiz.nome}</li>`
    }
    corpo.style.backgroundColor = cor;
}

let adicionarComida = (callback) =>{
    let escolherCor = prompt("Digite uma cor em inglês")
    setTimeout(() => {
        raizes.push({nome:"Acapuco"},{nome:"Pão De Forma"});
        callback(escolherCor);
    }, 1000);
}

adicionarComida(imprimirComidas);