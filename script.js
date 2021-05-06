
const easScreenInner = document.querySelector('#eas-screen-inner');
const canvas = document.querySelector('#draw');
canvas.width = easScreenInner.offsetWidth;
canvas.height = easScreenInner.offsetHeight;
const context = canvas.getContext("2d");

window.addEventListener('keydown', drawWithArrows);


var startPoint = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    leftDialDeg: 0,
    rightDialDeg: 0,
};

function drawWithArrows (e) {
    if(e.keyCode == "38") {
        e.preventDefault();
        draw("up");
        rotateDial("up");
    }
    if(e.keyCode == "39") {
        e.preventDefault();
        draw("right");
        rotateDial("right");
    }
    if(e.keyCode == "40") {
        e.preventDefault();
        draw("down");
        rotateDial("down");
    }
    if(e.keyCode == "37") {
        e.preventDefault();
        draw("left");
        rotateDial("left");
    }
    if(e.keyCode == "32") {
        e.preventDefault();
        shakeStart();
        
    }
}

function draw (direction) {
    let newX = 0;
    let newY = 0;
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    context.lineWidth = 2;

    if(direction == "up") {
        startPoint.y -= 2;
        if(startPoint.y < 0) startPoint.y = 0;
        context.lineTo(startPoint.x, startPoint.y);
        context.stroke();
        
    }
    if(direction == "right") {
        startPoint.x += 2;
        if(startPoint.x > 440) startPoint.x = 440;
        context.lineTo(startPoint.x, startPoint.y);
        context.stroke();
    }
    if(direction == "down") {
        startPoint.y += 2;
        if(startPoint.y > 296) startPoint.y = 296;
        context.lineTo(startPoint.x, startPoint.y);
        context.stroke();
    }
    if(direction == "left") {
        startPoint.x -= 2;
        if(startPoint.x < 0) startPoint.x = 0;
        context.lineTo(startPoint.x, startPoint.y);
        context.stroke();
    } 
}

function rotateDial (direction) {
    let leftDial = document.querySelector("#left-inner-rotor");
    let rightDial = document.querySelector("#right-inner-rotor");
    
    if(direction == "up") {
        startPoint.leftDialDeg -= 5;
        leftDial.style.transform = `rotate(${startPoint.leftDialDeg}deg)`;
    }
    if(direction == "right") {
        startPoint.rightDialDeg += 5;
        rightDial.style.transform = `rotate(${startPoint.rightDialDeg}deg`;
    }
    if(direction == "down") {
        startPoint.leftDialDeg += 5;
        leftDial.style.transform = `rotate(${startPoint.leftDialDeg}deg)`;
    }
    if(direction == "left") {
        startPoint.rightDialDeg -= 5;
        rightDial.style.transform = `rotate(${startPoint.rightDialDeg}deg)`;
    }

}

function shakeStart () {
    let eas = document.querySelector("#eas-outer");
    eas.classList.add("shake");
    setTimeout(canvasOpacityFade1, 100);
    setTimeout(canvasOpacityFade2, 400);
    setTimeout(canvasOpacityFade3, 600);
    setTimeout(canvasOpacityFade4, 900);
    setTimeout(shakeStop, 2100);
}

function shakeStop () {
    let eas = document.querySelector("#eas-outer");
    eas.classList.remove("shake");
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.opacity = "1";
}

function canvasOpacityFade1 () {
    canvas.style.opacity = "0.9";
}

function canvasOpacityFade2 () {
    canvas.style.opacity = "0.6";
}

function canvasOpacityFade3 () {
    canvas.style.opacity = "0.3";
}

function canvasOpacityFade4 () {
    canvas.style.opacity = "0.1";
}