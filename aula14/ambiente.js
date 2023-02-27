function Carregar(){
    /*var c = 1; 
    var msg = document.getElementById("msg"); //puxando informação do html

    
    while(c <= 5 ){
        msg.innerHTML += `<br>${c}`
        c++ // c recebe c + 1
    } */
    msg.innerHTML += `Vai começar....`
    for(var c = 1; c <= 5; c++){ //mesmo exercício feito a partir do for. 1 inicia a variável, 2 indica a condição e assim parte para 
        //execução, retorna e 3 adiciona incremento que seria adicionar o c= c+1 e tudo se repete. 
        msg.innerHTML += `<br>${c}`
    }
    msg.innerHTML += `<br>FIM`
}