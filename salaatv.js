

let pessoas= [ 
    {
        nome: 'Paulo',
        cargo: 'Estagiário',
        salario: 1400.00,
        gratificacao:150.00,
        idade: 19,

    },
    {
        nome: 'Lucas',
        cargo: 'Analista júnior',
        salario: 3500.00,
        gratificacao:450.00,
        idade: 22,
    },
    {
        nome: 'Ana',
        cargo: 'Analista Júnior',
        salario: 4700.00,
        gratificacao:650.00,
        idade: 25,
    },
    {
        nome: 'Joaquim',
        cargo: 'Analista Pleno',
        salario: 5800.00,
        gratificacao:860.00,
        idade: 28,
    },
    {
        nome: 'Cesár',
        cargo: 'Gerente de Projetos',
        salario: 8000.00,
        gratificacao:2500.00,
        idade: 32,
    },
]

// questão 1 - Mostre no console o nome da pessoa e quanto ela recebe em um texto formatado, para todos os itens do array, com uma string formatada.


pessoas.forEach((item)=>console.log(`${item.nome} recebe R$ ${(item.gratificacao+item.salario)} de salário e bonificação`))

// questao 2 - Para o mesmo array de objetos pessoas, crie um novo array, com apenas os valores das gratificações

let gratificacoes = pessoas.map((item)=>item.gratificacao)
    


// questao 3 - Utilizando o map, crie uma função que retorna um array, com os valores dobrados do array de gratificações.
let dobradgratif = gratificacoes.map((item)=>item*2)

// questao 4 - Crie um array com as pessoas (objeto) que recebem mais que 4mil reais de salario.

let maisdequatro = pessoas.filter((item)=>{
    if(item.salario>4000){
        return item
    }
})




// questao 5 - Crie um array com as pessoas (objeto) que têm mais de 20 anos.

let maisdevinte = pessoas.filter((item)=>{
    if(item.idade>20){
        return item
    }
})




//questao 6 -  Exiba o valor total das gratificações. Utilize reduce

let totalgratificacao = gratificacoes.reduce((soma,item)=> soma += item)