let btnvermelho=document.getElementsByTagName('buttom')[0]
let btnverde=document.getElementsByTagName('buttom')[1]
let btnazul =document.getElementsByTagName('buttom')[2]


let quadro =document.querySelector('.quadro')

function mudarcor(cor){
    quadro.style.background=cor

}

let elementofilho = document.createElement('p')

elementofilho.innerHTML='texto inserido no inner HTML de um parágrafo criado com createElement do objeto document'


let elementopai =   document.querySelector('body')

elementopai.appendChild(elementofilho)


let outroelementofilho = document.createElement('h1')

outroelementofilho.innerHTML = 'Titulo criado com js'


elementopai.appendChild(outroelementofilho)

