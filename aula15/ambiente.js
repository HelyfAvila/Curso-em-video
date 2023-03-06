function Calcular(){
    let res = document.getElementById('res');
    let num = [5, 8, 2, 9 , 3]; //criação de vetor
    num[5] = 6; //adiciona um valor a vetor já existente
    num.push(7);
    num.push(1);
    num.length//para ver cumprimento do vetor, quantos indices ele possui
    num.sort() //deixa os vetores em ordem crescente
    
    

    res.innerHTML += `<br>Nosso vetor é o ${num}` //Mostra os elementos do vetor
    res.innerHTML += `<br> O vetor tem ${num.length} posições!` //mostra a quantidade 
    res.innerHTML += `<br> O primeiro valor do vetor é ${num[0]}`//Mostra o primeiro valor do vetor
}