
 <canvas width="600" height="400" ></canvas> 

var tela = document.querySelector("canvas");
var pince = tela.getContext('2d');
pince.fillStyle = 'yellow'
pince.fillRect(0, 0, 600, 400);
pince.fillStyle = 'green'
pince.fillRect (0, 0, 200, 400,)

pince.fillStyle = "red"
pince.fillRect(400, 0, 200, 400)

pince.fillStyle = "blue"
pince.beginPath()
pince.moveTo(300, 200)
pince.lineTo(200, 400)
pince.lineTo(400, 400)
pince.fill()

pince.fillStyle = "linghgrey"
pince.beginPath()
pince.arc(300, 200, 50, 0, 2 * 3.14)
pince.fill()
document.write("<br>")




    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    // cabeça
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(200,50,350,300);

    // olhos
    pincel.fillStyle = 'black';
    pincel.fillRect(250, 110, 90, 90);
    pincel.fillRect(410, 110, 90, 90);

    // nariz
    pincel.fillRect(340, 200, 70, 100);

    // boca ou barba
    pincel.fillRect(300, 240, 40, 110);
    pincel.fillRect(410, 240, 40, 110);    

