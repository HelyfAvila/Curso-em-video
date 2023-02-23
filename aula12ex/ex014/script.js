function Carregar(){
    var msg =  document.getElementById('msg'); //puxa informação do html
    var img = document.getElementById('imagem'); //puxa informação do html
    var data = new Date() //puxa informações da data de agora do próprio sistema
    var hora = data.getHours() //puxa a hora
    
    msg.innerHTML = `Agora são ${hora} horas.` //mensagem sendo inserida dentro do html na div "msg"
    if (hora >= 0 && hora < 12){ //Bom dia 
        img.src =  'fotomanha.png' //insere a imagem de bom dia 
        document.body.style.background =   '#87CEFA'
    }else if (hora >= 12 && hora <= 18){ //Boa tarde
        img.src = 'fototarde.png' //insere a imagem de boa tarde
        document.body.style.background =  '#b9846f'
    }else{ //Boa noite
        img.src = 'fotonoite.png' // insere a imagem de boa noite
        document.body.style.background = '#363636'
    }
}