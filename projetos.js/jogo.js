<canvas width="600" height="400"></canvas>


    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);
    var raio = 10;

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();

    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);

    }
    function desenhaAlvo(x, y){
    desenhaCirculo(x, y, raio + 20, 'red')
    desenhaCirculo(x, y, raio + 10, 'white' )
    desenhaCirculo(x, y, raio, 'red');
    }

desenhaAlvo()
 function sorteia (maximo){
return Math.floor(Math.random() * maximo)

 }
 var xAleatoria;
var yAleatoria;

 function atualizaTela(){
     limpaTela()
var xAleatoria = sorteia(600)
var yAleatoria = sorteia(400)
desenhaAlvo(xAleatoria, yAleatoria)
 }
setInterval(atualizaTela, 2100)

function dispara (evento){
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

if ((x > xAleatoria - raio)
&& (x < xAleatoria + raio) 
&& (y > yAleatoria - raio)
&& (y < yAleatoria + raio)){

    alert ('acertou');
}
    }
    tela.onclick = dispara;
