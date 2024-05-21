function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        //value: estoque, // valor
        //writable: false, // naõ pode alterar o valor
        configurable: true, // configurável

        get: function(){
            return estoque;
        },
        set: function(valor){
            this.estoque = valor;
        }
    });
}
    const p1 =  new Produto('Camiseta', 20, 3);
    console.log(p1);
    console.log(p1.estoque); //Para buscar o valor do Getter

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            return nome =  valor;
        }
    };
}

const p2 = criaProduto('camiseta');
console.log(p2);
console.log(p2.nome)