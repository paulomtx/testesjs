// function nomefuncao(){
//     console.log('fiz algo')
// }

// function nomeoutrafuncao(x = '1', y){
//     console.log('fiz algo' +x +y)
// }
//  nomeoutrafuncao('segundo', 'primeiro')

//  //funções de seta

//  console.log(() => 'fiz algo')


//  //callback

//  function calculadora(n1,n2,funcao){
//     return(funcao(n1,n2))
//  }

//  function imprimir (algo){
//     console.log(algo)
//  }



//  function somar(n1,n2){
//     let resultado = n1+ n2
//     return resultado
//  }

//  let soma =  calculadora(2,2,somar)
//  console.log(soma)

//  calculadora(10,3, imprimir)


// function dizeroifortaleza(nome){
//     console.log(`${nome}, ei boy`)
// }

// function dizeroinatal(nome){
//     console.log(`${nome}, ei mah`)
// }

// function dizeroisaopaulo(nome){
//     console.log(`${nome}, ei mano`)
// }

// function falarcidade(nome,funcao){
//     funcao(nome)
// }

// falarcidade('paulo', dizeroifortaleza)
// falarcidade('paulo', dizeroinatal)

// calculadora

// function somar(n1,n2){
//     return n1+n2
// }
// function subtrair(n1,n2){
//     return n1-n2
// }
// function multiplicar(n1,n2){
//     return n1*n2
// }
// function dividir(n1,n2){
//     if (n2!=0) {
//         return n1 / n2
//     } else {
//         return('divisão impossivel, divisor informado é igual a zero')
//     }
   
// }

// function calculadora(n1,n2,operacao){
//     let funcao =eval(operacao)
//      let resultado = funcao(n1,n2)
//      alert(resultado)
// }

// let n1 = Number(prompt('digite primeiro numero'))
// let n2 = Number(prompt('digite segundo numero'))
// let resultado= somar(1,1)
// let opcao= prompt("digite a o operação \n - somar \n -subtrair \n - multiplicar \n -dividir")


// calculadora(n1,n2,opcao)


    // switch (opcao) {
    //     case '+':
    //         resultado=n1+n2
    //         console.log(resultado)
    //         break;
    //     case '-':
    //         resultado=n1-n2
    //         console.log(resultado)
    //         break;
    //     case '*':
    //         resultado=n1*n2
    //         console.log(resultado)
    //         break;
    //     case '/':
    //         if(n2!=0){
    //         resultado=n1/n2
    //         console.log(resultado)
    //         break;
    // }
    //         else{
    //         resultado = 'não é possivel divisão por 0 '
    //         }

    //     default:
    //         console.log('não há suporte para operação escolhida')
    //         break;
    // }


// function somarnumerosintervalo(inicio= 0,final=0){
//     let soma = 0

//     for(let i=inicio;i<=final;i++){
//         soma+=i
//     }
    
//     return soma
// }

// let soma1a100 =somarnumerosintervalo(1,100)
// console.log(soma1a100)

// uso de array

// let endereco = [5019862, 'Rua Augusta', 'nº100' ,'Fortaleza', 'Ceará']

// let tamanho =endereco.length

// function media3notas(){
//     let notas =[]
//     for(i=1;i<=3;i++){
//         notas[i-1]= Number(prompt(`Digite a ${i} nota `))

//     }
//     notas[notas.length]=(notas[0]+notas[1]+notas[2])/ notas.length

//     return notas
// }

// let arraynotas=[1,2,3]
// arraynotas[3]='A'
// console.log(arraynotas)


// // adiciona no final 
// arraynotas.push('B')
// console.log(arraynotas)

// // excluir do ultimo elemento
// let excluido = arraynotas.pop()
// console.log(arraynotas)
// console.log(excluido)

// // adicional ao inicio
// arraynotas.unshift()
// console.log(arraynotas)

// // remover do inicio
// arraynotas.shift('inicio')
// console.log(arraynotas)

//  atividade de sala

let fila = ['ana','julia,','maria','mario','paulo','samira','jojo','clodivil','vidal','mateus']

let ultimoatentidos =[]
let atendimentoamanha=[]
for(let i=1;i<=3;i++){
    let ultimo =fila.shift() // remove a primeira pessoa da fila
    ultimoatentidos.unshift|(ultimo)//adiciona a pessoa removida no inicio da fila de atentidos

}

let novotamanhodafila=fila.length//7

for(let i=1;i<=novotamanhodafila;i++){
    let proximo = fila.shift()
    atendimentoamanha.push(proximo)
}

let nuemros =[1,2,3]

function multiplicar(num){
    return num**2
}

let numeros_quadrado= nuemros.map((item)=> multiplicar(item))
console.log(nuemros)
console.log(numeros_quadrado)
