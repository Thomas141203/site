function test(){    
    //Variable contexte
    var Cvas = document.getElementById("canvas1");
    var ctx = Cvas.getContext("2d");
    //Variable points
    var x0 = 350, y0 = 40;
    var x1 = 600, y1 = 40;

    var x2 = 600, y2 = 490;
    var dimPt = 10;

    //Début de la première tangente
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();

    ctx.beginPath();

    //Début de la seconde tangante
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.beginPath();

    //Points
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle = "black";
    ctx.rect(x0-dimPt/2, y0-dimPt/2, dimPt, dimPt);
    ctx.rect(x1-dimPt/2, y1-dimPt/2, dimPt, dimPt);
    ctx.rect(x2-dimPt/2, y2-dimPt/2, dimPt, dimPt);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();

    //Début du premier arc
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(x0, y0);
    ctx.arcTo(x1, y1, x2, y2, 120);
    ctx.stroke();

    ctx.closePath();

    //Début du second arc
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(x0, y0);
    ctx.arcTo(x1, y1, x2, y2, 220);
    ctx.stroke();

    ctx.closePath();

    //Début du troisième arc
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(x0, y0);
    ctx.arcTo(x1, y1, x2, y2, 400);
    ctx.stroke();

    ctx.closePath();
}

function Rectangle(){
    var canvas = document.getElementById("canvas1");

    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.lineWidth = 3;
        ctx.strokeRect(25, 25, 75, 75);

        var x = 25, y = 100;
        var dimPt = 10;

        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.rect(x-dimPt/2, x-dimPt/2, dimPt, dimPt);
        ctx.rect(y-dimPt/2, y-dimPt/2, dimPt, dimPt);
        ctx.rect(y-dimPt/2, x-dimPt/2, dimPt, dimPt);
        ctx.rect(x-dimPt/2, y-dimPt/2, dimPt, dimPt);
        ctx.stroke();
        ctx.fill();
    }
}

function Triangle(){
    var canvas = document.getElementById("canvas1");
    
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.lineWidth = 3;
        ctx.moveTo(75, 150);
        ctx.lineTo(25, 250);
        ctx.lineTo(125, 250);
        ctx.lineTo(75, 150);
        ctx.stroke();
        var dimPt = 10;

        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.rect(75-dimPt/2, 150-dimPt/2, dimPt, dimPt);
        ctx.rect(25-dimPt/2, 250-dimPt/2, dimPt, dimPt);
        ctx.rect(125-dimPt/2, 250-dimPt/2, dimPt, dimPt);
        ctx.stroke();
        ctx.fill();
    }
}

function Logo(){
    var canvas = document.getElementById("canvas1");
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
        ctx.stroke();
    }
}

function Parler(){
    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
    }
}

function Coeur(){
    var canvas = document.getElementById("canvas1");
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
            ctx.moveTo(75, 40);
            ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
            ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
            ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
            ctx.fill();
    }
}

function Bubule(){
    var ctx = document.getElementById('canvas1').getContext('2d');

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 32; j++) {
            ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ')';
            ctx.beginPath();
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            ctx.stroke();
        }
    }
}

// Une fonction utilitaire pour tracer des rectangles avec des coins arrondis
  
function rectArrondi(ctx, x, y, largeur, hauteur, rayon) {
    ctx.beginPath();
    ctx.moveTo(x, y + rayon);
    ctx.lineTo(x, y + hauteur - rayon);
    ctx.quadraticCurveTo(x, y + hauteur, x + rayon, y + hauteur);
    ctx.lineTo(x + largeur - rayon, y + hauteur);
    ctx.quadraticCurveTo(x + largeur, y + hauteur, x + largeur, y + hauteur - rayon);
    ctx.lineTo(x + largeur, y + rayon);
    ctx.quadraticCurveTo(x + largeur, y, x + largeur - rayon, y);
    ctx.lineTo(x + rayon,y);
    ctx.quadraticCurveTo(x, y, x, y + rayon);
    ctx.stroke();
}

function PacMan(){
    var canvas = document.getElementById('canvas1');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
  
        rectArrondi(ctx, 12, 12, 150, 150, 15);
        rectArrondi(ctx, 19, 19, 150, 150, 9);
        rectArrondi(ctx, 53, 53, 49, 33, 10);
        rectArrondi(ctx, 53, 119, 49, 16, 6);
        rectArrondi(ctx, 135, 53, 49, 33, 10);
        rectArrondi(ctx, 135, 119, 25, 49, 10);
    
        ctx.beginPath();
        ctx.arc(37, 37, 13, Math.PI/7, -Math.PI/7, false);
        ctx.lineTo(31, 37);
        ctx.fill();
    
        for(var i = 0; i< 8; i++){
            ctx.fillRect(51 + i * 16, 35, 4, 4);
        }
    
        for(i = 0; i < 6; i++){
            ctx.fillRect(115, 51 + i * 16, 4, 4);
        }
    
        for(i = 0; i < 8; i++){
            ctx.fillRect(51 + i * 16, 99, 4, 4);
        }
    
        ctx.beginPath();
        ctx.moveTo(83, 116);
        ctx.lineTo(83, 102);
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.lineTo(111, 116);
        ctx.lineTo(106.333, 111.333);
        ctx.lineTo(101.666, 116);
        ctx.lineTo(97, 111.333);
        ctx.lineTo(92.333, 116);
        ctx.lineTo(87.666, 111.333);
        ctx.lineTo(83, 116);
        ctx.fill();
    
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(91, 96);
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.moveTo(103, 96);
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.fill();
    
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
    
        ctx.beginPath();
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

function Forme(){
    var canvas = document.getElementById('canvas1');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
  
      var rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50);
  
      var cercle = new Path2D();
      cercle.moveTo(125, 35);
      cercle.arc(100, 35, 25, 0, 2 * Math.PI);
  
      ctx.stroke(rectangle);
      ctx.fill(cercle);
    }
}

function RAZcanvas(){
    var canvas = document.getElementById("canvas1");
    var canvasContext = canvas.getContext("2d");
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

function couleur(){
    var coul;
    var colorWell;
    var defaultColor = '#ffffff';
    window.addEventListener("load", startup, false);
    function startup(){
        colorWell = document.querySelector("#colorWell");
        colorWell.addEventListener("input", updateFirst, false);
        colorWell.select();
    }
    function updateFirst(event){
        coul = event.target.value;
    }
}


function Couleurs(){
    tabColor[document.forms["canvas1"].NumeroCourbeCoulEpai.selectedIndex-1]=document.forms["canvas1"].coul.value;
    tabEpai();
    /*var mes="Tableau des couleurs\n";
    for(var k=0;k<tabColor.length;k++)
      mes+="tabColor["+k+"]="+tabColor[k]+"\n";
    alert(mes);*/
}