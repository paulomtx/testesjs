let frutas =['maça', 'banana', 'garviola']


let numeros = [1,2,3,4]

// //sem necessidade de armazenar retorno

let retorno = frutas.forEach((FRUTA)=>console.log(FRUTA.toUpperCase()))
console.log(frutas)

let numerosDobro = numeros.map((num)=>{console.log(num)
    return num*2}
    )


//filter

let par =numeros.filter((x)=>{
    if(x%2==0){
        return x
    }
})


//construir um array de 4 objetos.Cada objeto terá as as seguintes chaves:nome,nota. Sendo a nota entre 0 e 10


let alunos= [
    {
        nome:'Paulo',
        nota:8

    },
    {
        nome:'Ana',
        nota:10
    },
    {
        nome:'Fernandes',
        nota:5
    },
    {
        nome:'Germano',
        nota:7
    },
]

console.log(alunos[1].nome)

//montar um array de objetos contendo apenas os aprovados

let aprovados =alunos.filter((aluno)=>{
    if(aluno.nota>=7){
        return aluno//todo o objeto
    }
})



let nomeaprovados =aprovados.map((elemento)=>elemento.nome)

let notasaprov= aprovados.map((elemento)=>elemento.nota)

let somanota = notasaprov.reduce((soma,nota)=>soma+=nota)
console.log(somanota)


let somanumeros= numeros.reduce((soma,num)=>soma+=num,100)

console.log(somanumeros)


