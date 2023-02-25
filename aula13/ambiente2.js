function Carregar(){
    var c = 1; //primeiro declarando a variável 
    var msg = document.getElementById("msg"); //puxando informação do html
    do{ // faça isso ...
        msg.innerHTML += `Passo ${c} <br>`
        c++
    }while(c <= 6);// enquanto isso for verdadeiro...
    
}