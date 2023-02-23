function Carregar(){ //o laço de repetição MAIS simples
    var msg =  document.getElementById('msg'); //puxa informação do html
    var c = 1
    while (c <= 6){ //vai fazer isso até que ele faça 6 vezes 
        msg.innerHTML += `Olá, tudo bem?` //mensagem sendo inserida dentro do html na div "msg"   
        c++ // lembrando que aqui somaria o c + 1 
    }
}