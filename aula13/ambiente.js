function Carregar(){ //o laço de repetição MAIS simples
    var msg =  document.getElementById('msg'); //puxa informação do html
    var c = 1
    while (c <= 100){ //vai fazer isso até que ele faça 6 vezes 
        msg.innerHTML += `Passo ${c} <br>` //mensagem sendo inserida dentro do html na div "msg"   
        c++ // c = c + 1 
    } //explicando resumidamente significa que adiciona + 1 enquanto o número menor ou
    // igual ou menos a 6. 
}