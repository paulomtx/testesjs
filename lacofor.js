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

let media =0
let somaNotas = 0
let pesos =0

for (let i = 1; i <= 4; i++) {
    if (i%2==0) {
        somaNotas+= Number(prompt(`Digite cada nota ${i}`))*2
        pesos+=2
    }
        else if (i == 3){
        somaNotas+= Number(prompt(`Digite cada nota ${i}`))*3
        pesos+=3
        }
     else {
        somaNotas+= Number(prompt(`Digite cada nota ${i}`))
        pesos+=1
    }
    
}

media= somaNotas/pesos
console.log(media)