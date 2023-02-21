var idade = 17
document.write(`Você tem ${idade}`)
if(idade < 16){
    document.write(`<br>Não vota`)
}else if(idade >= 16 && idade <18 ){
    document.write(`<br>Voto Opcional`)
}else if(idade >= 18 && idade < 70 ){
    document.write(`<br>Voto Obrigatório!`)
} else{
    document.write(`<br>Voto Opcional`)
}

