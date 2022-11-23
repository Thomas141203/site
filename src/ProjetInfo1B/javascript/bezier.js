const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let playBtn = document.getElementById("play-btn");
let playAnim = false;

let mousePos = null;

//Slider
let slider = document.getElementById("slider");
let sliderTxt = document.getElementById("slider-text");
//Change text content on initial document load
sliderTxt.textContent = slider.value;
slider.oninput = () => {
    sliderTxt.textContent = slider.value;
    parseSliderValue(slider.value)
}
//Parse sliders value
function parseSliderValue(sliderValue) {
    let tPercentage = sliderValue / 10;
    //0.1 because that is the default speed of the ball
    tPercentage = tPercentage * 0.1;
    ball.speed = tPercentage;
}

function playBtnText() {
    if(ball.x === points[3].x && ball.y === points[3].y){
        playBtn.textContent = "Restart?";
        slider.disabled = false;
    }
}

let ball = {x:30,y:30,speed:0.1,t:0,radius:20};
//Define the bezier curve movement of the ball
let points = [
    {x:ball.x,y:ball.y},
    {x:70,y:200},
    {x:125,y:295},
    {x:350,y:350} 
]
let posRadius = 7;
let pointToMove = null;

let isClickDown = false;

function moveBallInBezierCurve() {
    let [p0, p1, p2, p3] = points;
    //Calculate the coefficients based on where the ball currently is in the animation
    let cx = 3 * (p1.x - p0.x);
    let bx = 3 * (p2.x - p1.x) - cx;
    let ax = p3.x - p0.x - cx - bx;

    let cy = 3 * (p1.y - p0.y);
    let by = 3 * (p2.y - p1.y) - cy;
    let ay = p3.y - p0.y - cy -by;

    let t = ball.t;

    //Increment t value by speed
    ball.t += ball.speed;
    //Calculate new X & Y positions of ball
    let xt = ax*(t*t*t) + bx*(t*t) + cx*t + p0.x;
    let yt = ay*(t*t*t) + by*(t*t) + cy*t + p0.y;

    if(ball.t > 1){
        ball.t=1;
    }

    //We draw the ball to the canvas in the new location
    ball.x = xt;
    ball.y = yt;
    drawBall();
}

function drawBall() {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI * 2,false);
    ctx.fill();
}
//Actually render the points to the canvas
function drawPoints() {
    ctx.fillStyle = "red";
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x,point.y,posRadius,0,Math.PI * 2,false);
        ctx.fill();
        //Deal with text
        ctx.font = "11px Arial";
        ctx.fillText(`(${point.x},${point.y})`,point.x,point.y+30);
    });
}

//Returns true if cursor is inside of point
function isMouseOverPoint(point) {
    let dx = mousePos.x-point.x;
    let dy = mousePos.y-point.y;
    return(dx*dx+dy*dy<posRadius*posRadius);
}

function checkIfCursorInPoint(){
    if(mousePos && isClickDown && !pointToMove){
        points.forEach(point => {
            if(isMouseOverPoint(point)){
                pointToMove = point;
            }
        })
    }
}

function movePoint() {
    if(pointToMove === points[0]){
        points[0].x = mousePos.x;
        points[0].y = mousePos.y;
        ball.x = mousePos.x;
        ball.y = mousePos.y;
        return
    }
    let pointIndex = points.indexOf(pointToMove);
    points[pointIndex].x = mousePos.x;
    points[pointIndex].y = mousePos.y;
}

function drawLine() {
    ctx.beginPath();
    ctx.setLineDash([8, 15]);
    ctx.moveTo(points[0].x,points[0].y);
    ctx.bezierCurveTo(points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y);
    ctx.stroke();
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    playBtnText();
    //Ball code comes below
    if(!playAnim){
        drawBall();
    }else{
        moveBallInBezierCurve();
    }
    if(!slider.disabled) checkIfCursorInPoint();
    if(pointToMove) movePoint();
    if(!slider.disabled) drawLine();
    //Points will be above everything else
    if(!slider.disabled) drawPoints();
}

animate();

//Event listeners
playBtn.addEventListener("click", () => {
    playAnim = true;
    slider.disabled = true;
    if(ball.x === points[3].x && ball.y === points[3].y){
        //Restart the animation
        ball.t = 0;
        ball.x = points[0].x;
        ball.y = points[0].y;
        //Sort out btn text
        playBtn.textContent = "Play";
    }
});

canvas.addEventListener("mousemove", e => {

    mousePos = {
        x: e.clientX - canvas.offsetLeft,
        y: (e.clientY - canvas.offsetTop) + scrollY
    }
});

canvas.addEventListener("mousedown", () => {
    isClickDown = true;
});

canvas.addEventListener("mouseup", () => {
    //Main on click down. Used for simple detection
    isClickDown = false;
    //Not moving that point any more
    pointToMove = null;
});

//Change ball speed on initial document load
parseSliderValue(slider.value);