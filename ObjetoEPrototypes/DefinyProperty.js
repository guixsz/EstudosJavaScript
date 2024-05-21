function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        value: estoque, // valor
        writable: false, // naõ pode alterar o valor
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra chave
            value: estoque, // valor
            writable: false, // naõ pode alterar o valor
            configurable: true // configurável
        },

        preco: {
            enumerable: true, // mostra chave
            value: estoque, // valor
            writable: false, // naõ pode alterar o valor
            configurable: true // configurável
        }
    })
}
    const p1 =  new Produto('Camiseta', 20, 3);
    p1.estoque = 50000;
    // delete p1.estoque;
    console.log(p1);

    for(let chave in p1){
        console.log(chave)
    }
