function Calcular(){
    let res = document.getElementById('res');
    let valores = [8,1,7,4,2,9]
    //valores.sort()   serve para deixar na ordem correta
    let pos = 0
    let pos2 = valores.indexOf(10); //quando não se tem o valor ele retorna o mesmo NEGATIVO
    /*for(pos = 0; pos < valores.length; pos ++){ //pos variável utilizada para ser contador que inicia modelo de repetição, 
        //comparado com o valor que é final do vetor ou seja, valores.length e fazendo repetição até que se finalize com o incremento pos++ 
        res.innerHTML += `A posição ${pos} tem o valor ${valores[pos]}<br>`
    } //pos se inicia no 0 e enquanto pos for menor que tamanho de vetor ele adiciona 
    //incremento e tudo se repete. Esse é o código tradicional*/
    if (pos2 == -1){
        res.innerHTML += `<br>Esse valor não existe!`
    }else{
        res.innerHTML += `<br>O valor está na posição ${pos2}<br>`
    }

    //código simplificado, versões mais recentes ecmascript
    for (let pos in valores ){  //para cada posição dentro da variável composta, mostro valores pos. 
        res.innerHTML += `<br>A posição posição ${pos} tem o valor ${valores[pos]} <br>`
        pos++
    } //declaração da variável pos que é utilizada para acompanhar os vetores. Que acompanha os indices
    //declaração de variável composta, só funciona para array e objects
   
  // res.innerHTML += `O valor 10 está na posição ${pos2}` //esse valor não existe
}