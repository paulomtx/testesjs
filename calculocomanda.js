let entrada=document.getElementById('entrada')
let pratopricipal=document.getElementById('pratoprincipal')
let bebida=document.getElementById('bebida')
let sobremesa=document.getElementById('sobremesa')
let servico=document.getElementById('servico')
let subtotal=document.getElementById('subtotal')
let total=document.getElementById('total')




function alteracao() {
    console.log(`campo alterado`)
}

function calcularconta(){
    let precoTotal = Number(entrada.value)+Number(pratopricipal.value)+Number(bebida.value)+Number(sobremesa.value)

    let valortaxa= precoTotal*0.10

    let totalpagar = precoTotal+valortaxa

    return [precoTotal,valortaxa,totalpagar]
}

function mostrarconta(){
    let valores =calcularconta()//[precoTotal,valortaxa,totalpagar]

    subtotal.value=valores[0]
    servico.value=valores[1]
    total.value=valores[2]
}
