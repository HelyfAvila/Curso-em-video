function Calcular(){ //Tabuada resolução js Curso em vídeo
    var tab = document.getElementById('seltab');
    var txtNum = document.getElementById('txtNum');
    
    if(txtNum.value.length == 0){
        alert(`Por favor, digite um número!`) //se nada for digitado....
        
    }else{
        var num = Number(txtNum.value); //caso contrário, converte para número
        var i = 0 //inicia o contador que vai até 10 
        tab.innerHTML = '' //ANTES DE MOSTRAR EXECUÇÃO ELE LIMPA 
        while(i <= 10){ //enquanto o i for menor ou igual a 10 ele executa isso
            var item = document.createElement('option');
            item.text = `${num} X ${i} = ${num * i}` //como se tivesse criado o elemento option no html
            //na parte do select, para adicionar informações
            item.value = `tab${i}` //para definir um value para cada opção, para o js não faz tanto sentido
            tab.appendChild(item) //adiciona item a tab 
            i++ //adiciona i + 1
        }
    } 
}   
   