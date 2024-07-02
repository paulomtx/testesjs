
let conta ={
    titular:'paulo',
    senha:1234,
    agencia: 4619,
    conta: 8504-6,
    tipo:'PF',
    saldo:1500,
    emprestimo:[],

    sacar:function(valor,senha){
        if(senha==conta.senha){
            if (conta.saldo>= valor) {
                conta.saldo -= valor
                console.log('saque realizado com sucesso ')
            } else {
                console.log('saldo insuficiente')
            } 
         
        }
        else{
            console.log('senha incorreta')
        }
      
    },
    depositar: function(valor){
        conta.saldo+=valor
        console.log('Deposito realizado com sucesso')
    },
    consultarsaldo:function(){
        console.log(`saldo ${saldo.conta}`)
    },
    fazeremprestimo:function(valor,senha){
        if(senha==conta.senha){
            let qtdparcelas=24
            let juros=0.02
            let parcela=(valor/qtdparcelas)*(1 + juros)
            conta.saldo += valor
            let informacaoemprest = [valor, qtdparcelas, parcela,juros]
            conta.emprestimo.push(informacaoemprest)
            console.log(`empréstimo de ${valor} concendido . Saldo atual da conta ${conta.saldo}`)
        }
         else{
            console.log('senha digitada errada')
         }
    
    
}

}
