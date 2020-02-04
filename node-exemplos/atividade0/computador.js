class Computador {
    constructor(preco, nome, descricao) {
      this.preco = preco;
      this.nome = nome;
      this.descricao = descricao;
    }

    imprimir_dados(){
        console.log('Nome: ' + this.nome);
        console.log('R$ ' + this.preco);
        console.log(this.descricao + ' estrelas');
        console.log('==============================================');
    }
  }

  module.exports = Computador