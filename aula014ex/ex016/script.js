function Calcular(){
    var res = document.getElementById('res'); //puxa valor de html
    var txtIni = document.getElementById('txtIni'); //puxa valor de html
    var txtFim  = document.getElementById('txtFim'); //puxa valor de html
    var txtPasso = document.getElementById('txtPasso'); //puxa valor de html
    var emoji1 = '\uD83D\uDC49';	//adiciona o emoji de mãozinha em variável
    var emoji2 = '\uD83C\uDFC1'; //adiciona emoji de bandeira em variável

    if (txtIni.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0){ //se os valores forem iguais a vazio, acontece...
        res.innerHTML = `<strong>Impossível Contar!</strong>` //isso  e o alerta abaixo
        alert(`[Erro] Faltam dados !`) //lenght diz quantas letras tem dentro
    }else{ //agora se for um valor válido...
        res.innerHTML = `Contando...<br>`
        var passo = parseInt(txtPasso.value); //Converter o número em inteiro 
        var inicio = parseInt(txtIni.value); //Converter o número em inteiro
        var fim = parseInt(txtFim.value); //Converter o número em inteiro
        if(passo <=0){ //se o passo for igual a 0 ele desconsidera para que o programa não trave e passa a valer 1 
            alert(`Passo inválido, tente novamente! Considerando passo 1`)
            passo = 1
        }
        if (inicio < fim){
            for (var i= inicio; i <= fim; i += passo ){ //atribui valor de variável inicio a i, informa que o
                // i deve ser menor ou igual a fim para que contagem tenha limite
                //adiciona passo a i. 
                res.innerHTML += ` ${i} ${emoji1}` //Adiciona contagem e emoji da mãozinha
                } //unicode emoji list para emojis em javascript você coloca o código entre
                // \u{codigo aqui dentro} só funciona entre `aqui`
        }else{
            for(var i= inicio; i>= fim; i-= passo){// enquanto o inicio for maior ou igual ao fim o contador vai perder o passo ou seja, -= a passo, vai voltar! 
                res.innerHTML += `${i} ${emoji1}` //Adiciona contagem ao contrário e  emoji da mãozinha
            }
        }
        res.innerHTML += `${emoji2}`  //Adiciona emoji de bandeirinha para finalização
        //inner res utilizado dentro do else principal
    } 

}