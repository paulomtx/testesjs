// let i = 0 // intervalo de iniciação
// i<=10 // condiçaõ de repetição
// i++ // incremento 1 em 1 i+=valor

// imprimir todos números pares
// for (let i = 0; i <= 100; i+=2) {

//     console.log(i)
// }


//calcule a média de 4 notas - aritimética e ponderada
// peso n2 e peso n4 = 2


// aritimetica

// let somaNotas =0
// let media
// let i = 1

// for (;i <=4 ; i++) {
//     somaNotas+= Number(prompt(`Digite sua nota ${i}`))

  
// }

// media = somaNotas/ (i-1)
// console.log(media)


//ponderada

// let media =0
// let somaNotas = 0
// let pesos =0

// for (let i = 1; i <= 4; i++) {
//     if (i%2==0) {
//         somaNotas+= Number(prompt(`Digite cada nota ${i}`))*2
//         pesos+=2
//     }
//         else if (i == 3){
//         somaNotas+= Number(prompt(`Digite cada nota ${i}`))*3
//         pesos+=3
//         }
//      else {
//         somaNotas+= Number(prompt(`Digite cada nota ${i}`))
//         pesos+=1
//     }
    
// }

// media= somaNotas/pesos
// console.log(media)
// exercico logica aula 4 atividade 2 
// let inicio = 30 
// let final = 90

// let repeticoes = 10 
// let contagemnumintervalo = 0

// for (let i = 0; i <= repeticoes; i++) {
//     let numero= Number(prompt('Digite um número'))
//     if(numero<final && numero>inicio){
//          contagemnumintervalo+=1
//     }
// }

// console.log(`a contagem é ${contagemnumintervalo}`)

// tabela desconto

// let min =1 
// let max = 25
// let valorcompra = 500
// let incrementocompras =100

// for(let i =min; i<=max; i++){
//     let valorfinal= valorcompra - (valorcompra*i/100) 
//     console.log(`valor compra ${valorcompra}-${i}- valor final ${valorfinal}`)
//     valorcompra+=incrementocompras

// }

// Questão 4 

// let somanumeros=0

// for (let i = 1; i <= 10; i++) {
//     somanumeros+= Number(prompt(`Digite cada nota ${i}`))
    
// }

// console.log(`A soma dos números é ${somanumeros}`)

// let numero= 0
// let soma = 0
// while (numero<=50) {
//     console.log(numero)
//     numero+=2
 
// } 

// questão 7

// let soma=0


// for(let i =0 ; i<=50;i++){
//     if(i%2==0){
//         console.log(i)
//         soma +=i
        
//     }
   
// }
// console.log(soma) 

// Questão 5

// let numuser=(prompt(`Digite o primeiro número:`))


// let maior=numuser
// let menor =numuser
// let qtdnumeros=10



// for(i=2;i<=qtdnumeros;i++){


//     if (numuser>maior) {
//        maior=numuser
//     } 
//     else if(numuser<menor){
//        menor=numuser
//     }
//     if(i<11){
//       numuser=(prompt(`Digite o ${i} número`))  
//     }
    
// }

// introdução de funções


