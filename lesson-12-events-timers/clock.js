'use strict';

(function () {
    const radiusClock = 200;
    const radiusNumber = 160;
    const radiusNumContainer = 18;

    function drawClock() {
        var container = document.getElementById('container');
        var hourHand;
        var secondsHand;
        var minutesHand;
        var hours = 12;

        var clockFace = document.createElement('div');
        clockFace.style.width = radiusClock * 2 + 'px';
        clockFace.style.height = radiusClock * 2 + 'px';
        clockFace.classList.add('clock-face');
        container.appendChild(clockFace);

        var digitalClock = document.createElement('div');
        digitalClock.classList.add('time');
        clockFace.appendChild(digitalClock);

        var clockFaceCenterX = clockFace.offsetLeft + clockFace.offsetWidth / 2;
        var clockFaceCenterY = clockFace.offsetTop + clockFace.offsetHeight / 2;

        function createHand(hand, width, className) {
            hand = document.createElement('div');
            hand.style.width = width + 'px';
            hand.style.left = clockFaceCenterX + 'px';
            hand.style.top = clockFaceCenterY + 'px';
            hand.classList.add(className);
            clockFace.appendChild(hand);
        }

        function createHours(hour) {
            for (var i = 1; i <= hour; i++) {
                var angle = (i / hour) * Math.PI * 2;
                var number = document.createElement("div");
                number.classList.add('number');
                number.innerHTML = i;
                number.style.width = radiusNumContainer * 2 + 'px';
                number.style.height = radiusNumContainer * 2 + 'px';
                clockFace.appendChild(number);
                var numberCenterX = clockFaceCenterX + radiusNumber * Math.sin(angle);
                var numberCenterY = clockFaceCenterY - radiusNumber * Math.cos(angle);
                number.style.left = Math.round(numberCenterX - number.offsetWidth / 2) + "px";
                number.style.top = Math.round(numberCenterY - number.offsetHeight / 2) + "px";
            }

        }

        createHours(hours);

        createHand(hourHand, radiusClock / 2, 'hour-hand');
        createHand(secondsHand, radiusNumber, 'second-hand');
        createHand(minutesHand, radiusNumber, 'min-hand');

        function setTime() {
            var CurrTime = new Date();
            var currSeconds = CurrTime.getSeconds();
            var currMinutes = CurrTime.getMinutes();
            var currHours = CurrTime.getHours();

            var second = document.querySelector(".second-hand");
            var minute = document.querySelector(".min-hand");
            var hour = document.querySelector(".hour-hand");

            function rotate(element, deg) {
                element.style.transform = `rotate(${deg - 90}deg)`
            }

            var secondsRotateDeg = (currSeconds / 60) * 360;
            var minutesRotateDeg = (currMinutes / 60) * 360 + (currSeconds / 60) * 6;
            var hoursRotateDeg = (currHours / 12) * 360 + (currMinutes / 60) * 30;

            rotate(second, secondsRotateDeg);
            rotate(minute, minutesRotateDeg);
            rotate(hour, hoursRotateDeg);
        }

        function UpdateTime() {
            var CurrTime = new Date();
            var digClock = document.querySelector('.time');
            digClock.innerHTML = FormatDateTime(CurrTime);
        }

        function FormatDateTime(DT) {
            var Hours = DT.getHours();
            var Minutes = DT.getMinutes();
            var Seconds = DT.getSeconds();
            return Str0L(Hours, 2) + ':' + Str0L(Minutes, 2) + ':' + Str0L(Seconds, 2);
        }

        function Str0L(Val, Len) {
            var StrVal = Val.toString();
            while (StrVal.length < Len)
                StrVal = '0' + StrVal;
            return StrVal;
        }

        setInterval(UpdateTime, 1000);
        setInterval(setTime, 1000);
    }

    drawClock();
}());
