const Produto = {nome: 'Produto', preco: 1.8};

for(let [nome, preco] of Object.entries(Produto)){
    console.log(nome, preco);       
}
const Caneca = {
    ...Produto,
    material: 'Procelana'
};

console.log(Object.getOwnPropertyDescriptor(Produto, 'nome'));
Produto.nome = 'Outra coisa'
console.log(Produto)



Caneca.nome = 'Outro Nome' 
Caneca.preco = 2.6;
// console.log(Produto)
// console.log(Caneca);