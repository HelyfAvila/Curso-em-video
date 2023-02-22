var agora = new Date()
var diaSem = agora.getDay()

/*
 0- Domingo
 1- Segunda-Feira
 2- Terça- Feira
 3- Quarta- Feira
 4- Quinta- Feira
 5- Sexta- Feira
 6- Sábado 
*/

switch (diaSem){
    case 0:
        document.write(`Domingo`)
    break
    case 1: 
        document.write(`Segunda- Feira`)
    break 
    case 2:
        document.write(`Terça- Feira`)
    break 
    case 3:
        document.write(`Quarta- Feira`)
    break
    case 4:
        document.write(`Quinta- feira`)
    break
    case 5:
        document.write(`Sexta-Feira`)
    break
    case 6:
        document.write(`Sábado`)
    break
    default:
        document.write(`[ERRO] Dia Inválido`)
    break
}    
    
