// let escolha = 2// valores entre 1 e 3

// switch (escolha) {
//     case 1:
//     console.log('escolheu 1')
//         break;
//     case 2:
//     console.log('escolheu 2')
//         // break;
//     case 3:
//     console.log('escolheu 3')
//         // break;

//     default:
//         console.log(' condiçao padrão. Atende qualquer escolha que não seja 1,2 e 3.')
//         // break;
// }



// calculadoras


let n1 = Number(prompt('digite primeiro numero'))
let n2 = Number(prompt('digite segundo numero'))
let resultado
let opcao= prompt("digite a o operação + , - , / ,* ")

function calculadora(n1,n2,opcao){
    
}
    switch (opcao) {
        case '+':
            resultado=n1+n2
            console.log(resultado)
            break;
        case '-':
            resultado=n1-n2
            console.log(resultado)
            break;
        case '*':
            resultado=n1*n2
            console.log(resultado)
            break;
        case '/':
            if(n2!=0){
            resultado=n1/n2
            console.log(resultado)
            break;
    }
            else{
            resultado = 'não é possivel divisão por 0 '
            }

        default:
            console.log('não há suporte para operação escolhida')
            break;
    }

 
//contas bancárias


// const nome = 'Paulo'
// let saldo = 500
// let entradasenha = prompt('Digite sua senha')
// let senha = '2525'
// if(senha== entradasenha){
//     let escolha =Number(prompt(`${nome} Digite uma operação para a sua conta :\n 1- deposito \n 2-saque \n 3- saldo`))
//     switch (escolha) {
//         case 1:
//             let valordeposito=Number(prompt('Digite o valor a ser depositado'))
//             saldo += valordeposito
//             console.log('O valor foi depositado')
//             console.log(`o saldo atual da conta é  R$ ${saldo}`)
//             break;
//         case 2:
//             let valorsaque=Number(prompt('Digite o valor de saque'))
//             if (saldo<=valorsaque) {
//                 saldo -= valorsaque
//                 console.log('Retire seu dinheiro no caixa')
//             } else {
//                 console.log('saldo insuficinte')
//             }
           
           
//             break;
//         case 3:
//             console.log(`${saldo}`)
//             break;
    
//         default:
//             console.log('A operaçao desejada não confere nenhuma das opções')
//             break;
//     }

// }
// else{
//     console.log('Acesso negado! Senha inválida')
// }


// Bonificação empresa
// tempo de empresa

// let salariobase = 2000
// let opcao= Number(prompt('Digite seu tempo de empresa  :\n 1- áte 1 ano :\n 2 - 2 a 5 anos  \n 3- 5 a 10 anos \n 4- mais de 10 anos'))
// let resultado
// let filhos=Number(prompt('digite numero de filhos menores de 7 anos'))
// let beneficio =1200
// let bon1= 200
// let bon2= 330
// let bon3=440


// switch (opcao) {
//     case 1:
        
//         if (filhos<7) {
//             resultado= (((salariobase-(salariobase*0.15))+(500*filhos))+beneficio)
            
//         } else {
//             resultado= (salariobase-(salariobase*0.15))
//         }
//         console.log(`o seu salário é ${resultado}`)
        
//         break;
//     case 2:
       
//         if (filhos<7) {
//             resultado=(((salariobase-(salariobase*0.15))+(500*filhos))+(beneficio+bon1))
//             document.write(`o seu salário é  ${resultado}`)
            
//         } else {
//             resultado=((salariobase-(salariobase*0.15))+bon1)
//         }
//         console.log(`o seu salário é  ${resultado}`)
//         break;
//     case 3:
//         if (filhos<7) {
//             resultado=(((salariobase-(salariobase*0.15))+(500*filhos))+(beneficio+bon2))
//         } else {
//             resultado=((salariobase-(salariobase*0.15))+bon2)
//         }
//         console.log(`o seu salário é  ${resultado}`)
//         break;
//     case 4:
//         if (filhos<7) {
//             resultado=(((salariobase-(salariobase*0.15))+(500*filhos))+(beneficio+bon3))
//         } else {
//             resultado=((salariobase-(salariobase*0.15))+bon3)
//         }
//         console.log(`o seu salário é  ${resultado}`)
//         break;

//     default:
//         break;
// }