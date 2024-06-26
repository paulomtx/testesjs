let nome =prompt("Digite seu nome:")
let tempodeempresa = Number(prompt("Digite seu tempo de empresa em anos"))
let opcaotempodeempresa = Number(prompt('Digite a opção que está relacionada ao seu tempo de empresa : \n 1 - menos de um ano \n 2- entre 1 a 2 anos \n 3 - entre 2 a 5 anos \n 4- entre 5 a 10 anos \n 5 - mais de 10 anos'))
let qtdmenor7= Number(prompt("Digite o número de dependentes menores que 7 anos:"))
let salariobase= 9000.00

let = bonus1
if (tempodeempresa<1) {
      bonus1 = 0
}
      else if(tempodeempresa>=1 && tempodeempresa<=2){
      bonus1 = salariobase*0.05
      }
      else if(tempodeempresa>2 && tempodeempresa<=5){
      bonus1=salariobase*0.10

      }
      else if(tempodeempresa>5 && tempodeempresa<=10){
        bonus1= salariobase*0.15
      }
      else if(tempodeempresa>10){
        bonus1= salariobase*0.20
      }
else {
   bonus1=0 
}
let= bonus2
switch (opcaotempodeempresa) {
    case 1:
        bonus2=0
        break;
    case 2:
        bonus2=salariobase*0.05
        break;
    case 3:
        bonus2=salariobase*0.10
        break;
    case 4:
        bonus2=salariobase*0.15
        break;
    case 5:
        bonus2=salariobase*0.20
        break;

    default:
        bonus2=0
        alert('o texto inserido no campo de bonificação não é apenas númerico')
        break;
}

let bonusdepedente =qtdmenor7*500
let va= 1000
let vt= 200


let inss = salariobase*0.09
let fgts = salariobase*0.08

let salarioliquido = salariobase + (salariobase*bonus1)+bonusdepedente+va+vt - inss - fgts

document.write(`Apontamentos folha de pagamento <br>
    <ul>

    <li>Nome : ${nome}<li>
    <li> Salário base : ${salariobase}<li>
    <li> Bônus tempo de serviço  : ${salariobase*bonus1}<li>
    <li> Auxilio Creche  : ${bonusdepedente}<li>
    <li> Vale transporte  : ${vt}<li>
    <li> Vale Alimentação  : ${va}<li>
    <li> Desconto inss  : ${inss}<li>
    <li> Desconto FGTS  : ${fgts}<li>
    <li> Total a receber  : ${salarioliquido}<li>


    <ul>
    
    
    `)