var agora = new Date() //pega informações atuais do sistema
var hora = agora.getHours() // determina qual tipo de informação, exemplo, hora
// var hora = 18 Hora definida manualmente 
document.write(`Agora são ${hora} horas`);

if (hora >= 5 && hora <= 12){
    document.write(`<br>Bom dia!`)
}else if(hora > 12 && hora < 18){
    document.write(`<br>Boa tarde!`)
}else if(hora >= 18 && hora < 24){
    document.write(`<br>Boa noite!`)
}else{
    document.write(`<br>Boa madrugada!`)
}
