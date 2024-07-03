// let enderecoArray = ['rua','bairro','cidade','cep']

// for(let i=0; i<enderecoArray.length;i++){
//     console.log(enderecoArray[i])
// }
// for(let elemento in enderecoArray){
//     console.log(elemento)
// }



// let endereco = {rua: 'rua', bairro:'bairro', cidade:'cidade', cep:'cep'}

// console.log(enderecoArray[0])
// console.log(endereco.rua)


// // crie um objeto pessoa com as propriedades nome,idade,altura e peso

// let pessoa ={
// nome:'paulo', 
// idade:27,
// altura:1.78, 
// peso:76,
// calcularIMC:function(){return pessoa.peso/pessoa.altura**2},
// chaves: pessoa.keys,
// tamanhoObjeto:pessoa.lenght
// }



// console.log(`nome:${pessoa.nome} idade:${pessoa.idade} altura:${pessoa.altura} peso: ${pessoa.peso}`)

// console.log(pessoa)

// pessoa.corfavorita = 'azul'

// delete pessoa.idade

// console.log(pessoa.keys)

// let produto ={nome: 'camiseta', preco: 39.90 , cor : 'azul', tamanho:'M', disponibilidade: true, calculardeconto:function(desconto){return produto.preco*(1-desconto/100)}}


// let produto2 = ['camiseta', 39.90 , 'azul', 'M', true]

// let produtocomdesconto = produto.calculardeesconto(5)

// crie um array com 5 produtos
// cada produto deve ser um objeto com as propriedades nome preco,cor, tamanho e disponibilidade
//crie um metodo calculardesconto que receba um numero e retorne o preço com desconto
//crie um método alterar dispobilidade. Se a disponibilidade estiver true altere pra false e vice-versa.


let produtos = []




for(let i=1;i<=5;i++){
    

    let produto = {
    

    nome:prompt(`nome ${i}`), 
    preco: parseFloat(prompt(`Preço ${i}`)),
    cor:prompt(`Cor do produto ${i}`),
    tamanho:prompt(`Tamanho do produto ${i}`),
    disponibilidade:confirm(`Produto ${i} está disponivel?`),
    calculardesconto:function(desconto=0){
        return produto.preco*(1-desconto/100)},

        alterardisponibilidade:function(){

        if(produto.disponibilidade){
            produto.disponibilidade=false
        }else{
            produto.disponibilidade=true
        }
    }


    


    }

}
    
console.log(produtos)
let produto2=JSON.stringify(produtos[1])
console.log(produto2)


//     produtos.push(produto)
    

// }

