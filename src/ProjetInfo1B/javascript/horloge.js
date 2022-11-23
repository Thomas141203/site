var canvas_horloge = document.getElementById("canvas_horloge");
var ctx_horloge = canvas_horloge.getContext("2d");
var radius = canvas_horloge.height / 2;
ctx_horloge.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx_horloge, radius);
    drawNumbers(ctx_horloge, radius);
    drawTime(ctx_horloge, radius);
}

function drawFace(ctx_horloge, radius) {
    var grad;
    ctx_horloge.beginPath();
    ctx_horloge.arc(0, 0, radius, 0, 2*Math.PI);
    ctx_horloge.fillStyle = 'white';
    ctx_horloge.fill();
    grad = ctx_horloge.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx_horloge.strokeStyle = grad;
    ctx_horloge.lineWidth = radius*0.1;
    ctx_horloge.stroke();
    ctx_horloge.beginPath();
    ctx_horloge.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx_horloge.fillStyle = '#333';
    ctx_horloge.fill();
}

function drawNumbers(ctx_horloge, radius) {
    var ang;
    var num;
    ctx_horloge.font = radius*0.15 + "px arial";
    ctx_horloge.textBaseline="middle";
    ctx_horloge.textAlign="center";
    for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx_horloge.rotate(ang);
        ctx_horloge.translate(0, -radius*0.85);
        ctx_horloge.rotate(-ang);
        ctx_horloge.fillText(num.toString(), 0, 0);
        ctx_horloge.rotate(ang);
        ctx_horloge.translate(0, radius*0.85);
        ctx_horloge.rotate(-ang);
    }
}

function drawTime(ctx_horloge, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx_horloge, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx_horloge, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx_horloge, second, radius*0.9, radius*0.02);
}

function drawHand(ctx_horloge, pos, length, width) {
    ctx_horloge.beginPath();
    ctx_horloge.lineWidth = width;
    ctx_horloge.lineCap = "round";
    ctx_horloge.moveTo(0,0);
    ctx_horloge.rotate(pos);
    ctx_horloge.lineTo(0, -length);
    ctx_horloge.stroke();
    ctx_horloge.rotate(-pos);
}