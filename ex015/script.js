function Calcular(){
 var data = new Date() //Puxa informações atuais de hora, data, ano etc
 var ano = data.getFullYear() //insere o ano atual 
 var fano = document.getElementById('txtano'); // puxa informação digitada em html
 var res = document.getElementById('res'); //puxa item de res que está dentro de html em div

    if(fano.value.length == 0 || fano.value > ano ){ //não pode ser vazia, o length conta a quantia de caracteres e o outro informa que o ano não pode ser maior que o atual
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else{
        var fsex = document.getElementsByName('radsex') //trás a informação da caixa de seleção
        var idade = ano - Number(fano.value) //Calcula a idade 
        var gênero = '' //define variável vazia que seja inserido o valor 
        var img = document.createElement('img') //criar elemento img
        img.setAttribute('id' , 'foto') //atribui id de foto, da pra fazer da mesma forma em html
        if (fsex[0].checked) { //fsex 0 significa que seria selecionado a 1 caixinha, ou seja, masculino 
            gênero = 'Homem' //dentro do gênero homem entra as opções de idade, ou seja, uma condição dentro da outra.
            if (idade >= 0 && idade < 14){ //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){ //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade <50){ // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{ //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14){//Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21){//Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade <50){// adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{//idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //deixa o texto no meio da tela
        res.innerHTML = `Dectectamos ${gênero} com ${idade} anos.` //trás genero e idade de acordo com condições
        res.appendChild(img) //Adiciona a imagem 
    } 


}