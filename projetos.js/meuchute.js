  


function pulaLinha() {
    document.write("<br>") 

}

function mostra(frase) {
    document.write(frase)
    pulaLinha()
}

var meuChute = Math.round(Math.random() * 10)

//var tentativas = 1;

//while (tentativas <=3){
//var chute = parseInt(prompt("Faça seu chute"))

//if (meuChute == chute) {
    //mostra("Você ACERTOU !!")
    //break;
//}else{
   // mostra("Você errou!! a respota era "+ meuChute)
//}
//tentativas++;
//}
for(var tentativas = 1; tentativas <= 3; tentativas++){

    var chute = parseInt(prompt("Faça seu chute"))

if (meuChute == chute) {
    mostra("Você ACERTOU !!")
    break;
}else{
    mostra("Você errou!! a respota era "+ meuChute)
}
}

