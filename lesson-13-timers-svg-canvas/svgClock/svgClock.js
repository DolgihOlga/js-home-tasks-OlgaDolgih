'use strict';

const baseRadius = 300; //радиус циферблата
const numbersBaseRadius = baseRadius / 2.5; //радиус оси цифр циферблата
const circleRadius = 20; // радиус кружков с цифрами
const dotSize = 7; //размер точки в центре часов
const wrapper = document.getElementById('wrapper');

wrapper.appendChild(createWatch());
setInterval(tickTimer, 1000);

function createWatch() {
    let base = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    base.setAttribute('width', baseRadius);
    base.setAttribute('height', baseRadius);
    let clock = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    clock.setAttribute('cx', baseRadius / 2)
    clock.setAttribute('cy', baseRadius / 2);
    clock.setAttribute('r', baseRadius / 2);
    clock.setAttribute('fill', 'rgb(235, 193, 103)')
    base.appendChild(clock);
    base.appendChild(createClockFace());
    base.appendChild(createArrow('hours', 10, 100));
    base.appendChild(createArrow('minutes', 5, 80));
    base.appendChild(createArrow('seconds', 2, 80));
    base.appendChild(createDecorativeDot(dotSize));
    base.appendChild(createDigitalWatch());
    return base;
}

function createClockFace() {
    let clockFace = document.createDocumentFragment();
    for (let number = 1; number <= 12; number++) {
        let angle = number * 30 / 180 * Math.PI;
        let x = ((baseRadius) / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
        let y = ((baseRadius) / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
        clockFace.appendChild(createHourCircle(x, y, circleRadius));
        clockFace.appendChild(createHourNumber(x, y, number));
    }
    return clockFace;
}

function createHourCircle(circleX, circleY, circleRadius) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute('cx', circleX);
    circle.setAttribute('cy', circleY);
    circle.setAttribute('r', circleRadius);
    circle.setAttribute('fill', 'rgb(70, 185, 60)');
    return circle;
}

function createHourNumber(circleX, circleY, number) {
    let hourNumber = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    hourNumber.setAttribute('x', circleX);
    hourNumber.setAttribute('y', circleY);
    hourNumber.setAttribute('text-anchor', 'middle');
    hourNumber.setAttribute('dominant-baseline', 'central');
    hourNumber.textContent = number;
    return hourNumber;
}

function createArrow(arrowType, arrowWidth, lineEnd) {
    let arrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    let lineStart = baseRadius / 2;
    arrow.setAttribute('x1', lineStart);
    arrow.setAttribute('y1', lineStart);
    arrow.setAttribute('x2', lineEnd);
    arrow.setAttribute('y2', lineEnd);
    arrow.setAttribute('id', arrowType);
    arrow.setAttribute('stroke', 'black');
    arrow.setAttribute('stroke-linecap', 'round');
    arrow.setAttribute('stroke-width', arrowWidth);
    arrow.setAttribute('transform-origin', `${lineStart}`);
    return arrow;
}

function createDigitalWatch() {
    let textClock = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    textClock.setAttribute('x', (baseRadius / 2 - baseRadius / 7));
    textClock.setAttribute('y', (baseRadius / 2 - baseRadius / 5));
    textClock.setAttribute('id', 'digit');
    textClock.setAttribute('font-size', '1.5rem');
    return textClock;
}

function createDecorativeDot(size) {
    let dot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    dot.setAttribute('cx', baseRadius / 2);
    dot.setAttribute('cy', baseRadius / 2);
    dot.setAttribute('r', size);
    dot.setAttribute('fill', 'black');
    return dot;
}

function tickTimer() {
    let now = new Date();
    let thisSecond = now.getSeconds();
    let thisMinute = now.getMinutes();
    let thisHour = now.getHours();
    updateWatch(thisHour, thisMinute, thisSecond);
    updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
    let thisSecondRotate = (second / 60) * 360 + 45;
    let thisMinuteRotate = (minute) / 60 * 360 + 45;
    let thisHourRotate = (hour + minute / 60) / 12 * 360 + 45;
    rotateHandle('seconds', thisSecondRotate);
    rotateHandle('minutes', thisMinuteRotate);
    rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
    let arrow = document.getElementById(`${handle}`);
    arrow.setAttribute('transform', `rotate(${degree})`);
}

function updateDigitalWatch(hour, minute, second) {
    let digitalWatch = document.getElementById('digit');
    digitalWatch.textContent = `${addZeroToNumber(hour)}:${addZeroToNumber(minute)}:${addZeroToNumber(second)}`;
}

function addZeroToNumber(currentTime) {
    return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
