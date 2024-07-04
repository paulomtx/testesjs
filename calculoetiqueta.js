let valor = document.getElementById('valor')
let qtd =document.querySelector('#quantidade')
let corEtiquetas= document.getElementsByName('cor')

let resposta = document.querySelector('div')


function calculardesconto(){

let descontoCor=0
let descontoQuant = 0
let cor ='indefinida'

if(corEtiquetas[0].checked){
    descontoCor=0.5
    cor= corEtiquetas[0].value
 }
 else if(corEtiquetas[1].checked){
    descontoCor=0.3
    cor= corEtiquetas[1].value
 }
 else if(corEtiquetas[2].checked){
     descontoCor=0.15
     cor= corEtiquetas[2].value
 }
 if(qtd.value>2){
     descontoQuant=0.1
 }
 
 let valorfinal = (valor.value*qtd.value)*(1- (descontoCor+descontoQuant))
 
 resposta.innerHTML= `
 <ul>
 <li> Preço Original Peça R$ ${valor.value}<li>
 <li> Cor da etiqueta R$ ${cor}<li>
 <li> Quantidade de peças R$ ${qtd.value}<li>
 <li> Desconto por cor  R$ ${descontoCor*100}%<li>
 <li> Desconto qauntidade  R$ ${descontoQuant*100}%<li>
 <li> Total da compra com desconto  R$ ${valorfinal}<li>
 <ul>
 
 
 
 
 
 `
 






}
