'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var radius = canvas.height / 2;//радиус циферблата
ctx.translate(radius, radius); // сдвигаем (0,0) в центр холста

setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx, radius);
    drawDecorativeDot(ctx, radius);
    drawCircleNumbers(ctx, radius);
    drawNumbers(ctx, radius);
    tickTimer();
}
//рисуем циферблат
function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgb(235, 193, 103)';
    ctx.fill();
}
//рисуем точку по центру
function drawDecorativeDot(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.06, 0, 2 * Math.PI);
    ctx.fillStyle = '#000';
    ctx.fill();
}
//рисуем кружочки для чисел
function drawCircleNumbers(ctx, radius) {
    for (let num = 1; num <= 12; num++) {
        let ang = num * 30 / 180 * Math.PI;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.80);
        ctx.rotate(-ang);
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.13, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgb(70, 185, 60)';
        ctx.fill();
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.80);
        ctx.rotate(-ang);
    }
}
//рисуем числа
function drawNumbers(ctx, radius) {
    ctx.font = radius * 0.12 + 'px arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000';
    for (let num = 1; num <= 12; num++) {
        let ang = num * 30 / 180 * Math.PI;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.80);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.80);
        ctx.rotate(-ang);
    }
}
//рисуем стрелки
function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
//получаем углы стрелок
function drawTime(hour, minute, second) {
    var thisHour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    var thisMinute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    var thisSecond = (second * Math.PI / 30);

    drawHand(ctx, thisHour, radius * 0.5, radius * 0.07);
    drawHand(ctx, thisMinute, radius * 0.7, radius * 0.03);
    drawHand(ctx, thisSecond, radius * 0.8, radius * 0.02);
}
//рисуем цифровые часы
function drawDigitalWatch(ctx, radius, hour, minute, second) {
    ctx.fillStyle = '#000';
    ctx.font = radius * 0.13 + 'px arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${addZeroToNumber(hour)}:${addZeroToNumber(minute)}:${addZeroToNumber(second)}`, 0, -radius / 2);
}

function tickTimer() {
    let currentTime = new Date();
    var thisHour = currentTime.getHours();
    var thisMinute = currentTime.getMinutes();
    var thisSecond = currentTime.getSeconds();
    drawTime(thisHour, thisMinute, thisSecond);
    drawDigitalWatch(ctx, radius, thisHour, thisMinute, thisSecond);
}

function addZeroToNumber(currentTime) {
    return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
