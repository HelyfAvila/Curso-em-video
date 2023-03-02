function Calcular(){
    var res = document.getElementById('res');
    var txtNum = document.getElementById('txtNum');
    var num = parseInt(txtNum.value);
    if(txtNum.value.length == 0){
        res.innerHTML = `Digite um número por gentileza`
    }else{
        res.innerHTML = `Calculando resultado!<br>`
        for (var i = 0; i <= 10;  i++){
            var resultado = Number(num * i)
            res.innerHTML += `<br>${num} X ${i} = ${resultado}<br/>`
        } 
    }   
}   