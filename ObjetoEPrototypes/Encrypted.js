function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
 //   this.nomeCompleto = () =>  this.nome + ' ' + this.sobrenome;
}


Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa("Guilherme", "Santana")

console.log(pessoa1.nomeCompleto());