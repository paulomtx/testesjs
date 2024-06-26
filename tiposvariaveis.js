let peso = Number(prompt('digite seu peso em kg'))
let altura =Number(prompt('digite sua altura'))

let imc = peso / (altura**2)

if (imc < 18.5) {

    console.log(`Abaixo do peso`)
    console.log(imc)
} 
else if( imc >=18.5 && imc <25 ){
    console.log(`peso normal`)
    console.log(imc)
}

else if(imc>=25 && imc< 30){
    console.log(`acima do peso`)
    console.log(imc)

}

else {
    console.log(`obeso`)
    console.log(imc)
}
