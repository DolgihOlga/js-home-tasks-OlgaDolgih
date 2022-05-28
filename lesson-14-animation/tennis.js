'use strict';

(function () {

    const widthField = 700;
    const heightField = 450;
    const racketWidth = 10;
    const racketHeight = 100;
    const ballSize = 25;

    function createTennis() {
        let wrapper = document.getElementById('wrapper');
        wrapper.style.width = widthField + 'px';
        wrapper.style.height = heightField + 'px';
        wrapper.appendChild(createInputStart());
        wrapper.appendChild(createScore());
        wrapper.appendChild(createField());
        return wrapper;
    };

    function createInputStart() {
        let inputStart = document.createElement('input');
        inputStart.type = 'button';
        inputStart.value = 'Старт!';
        inputStart.id = 'start';
        return inputStart;
    };

    function createScore() {
        let score = document.createElement('div');
        score.id = 'score';
        score.innerHTML = '0:0';
        return score;
    };

    function createField() {
        let field = document.createElement('div');
        field.id = 'field';
        field.style.width = widthField + 'px';
        field.style.height = heightField + 'px';
        field.appendChild(createRacketLeft());
        field.appendChild(createRacketRight());
        field.appendChild(createBall());
        return field;
    };

    function createRacketLeft() {
        let racket1 = document.createElement('div');
        racket1.id = 'racketLeft';
        racket1.style.width = racketWidth + 'px';
        racket1.style.height = racketHeight + 'px';
        racket1.style.left = '0px';
        racket1.style.top = heightField / 2 - racketHeight / 2 + 'px';
        return racket1;
    };

    function createRacketRight() {
        let racket2 = document.createElement('div');
        racket2.id = 'racketRight';
        racket2.style.width = racketWidth + 'px';
        racket2.style.height = racketHeight + 'px';
        racket2.style.right = '0px';
        racket2.style.top = heightField / 2 - racketHeight / 2 + 'px';
        return racket2;
    };

    function createBall() {
        let ball = document.createElement('div');
        ball.id = 'ball';
        ball.style.width = ballSize + 'px';
        ball.style.height = ballSize + 'px';
        return ball;
    };


    let fieldH = {
        width: widthField,
        height: heightField
    };

    let racketLeftH = {
        width: racketWidth,
        height: racketHeight,
        position: fieldH.height / 2 - racketHeight / 2,
        speed: 0,
        update() {
            let racketLeft = document.getElementById('racketLeft');
            racketLeft.style.top = this.position + 'px';
        }
    };

    let racketRightH = {
        width: racketWidth,
        height: racketHeight,
        position: fieldH.height / 2 - racketHeight / 2,
        speed: 0,
        update() {
            let racketRight = document.getElementById('racketRight');
            racketRight.style.top = this.position + 'px';
        },
    };

    let ballH = {
        posX: fieldH.width / 2 - ballSize / 2,
        posY: fieldH.height / 2 - ballSize / 2,
        size: ballSize,
        speedX: 0,
        speedY: 10,
        update() {
            let ball = document.getElementById('ball');
            ball.style.left = this.posX + 'px';
            ball.style.top = this.posY + 'px';
        },
    };

    let scoreH = {
        score1: 0,
        score2: 0
    };

    function showScore() {
        let score = document.getElementById('score');
        score.innerHTML = scoreH.score1 + ':' + scoreH.score2;
    };

    function tickBall() {
        ballH.posY += ballH.speedY;
        ballH.posX += ballH.speedX;
        // не ударился ли мяч о верхнюю или нижнию стенку поля
        if (ballH.posY <= 5 || ballH.posY >= fieldH.height - ballH.size) {
            ballH.speedY = -ballH.speedY;
        }
        // вылетел ли мяч правее стены?
        if (ballH.posX + ballH.size > fieldH.width) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = fieldH.width - ballH.size;
            scoreH.score1++;
            showScore();
        }
        // вылетел ли мяч левее стены?
        if (ballH.posX < 0) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = 0;
            scoreH.score2++;
            showScore();
        }
        // ударился ли ракеток.
        if (ballH.posX <= racketWidth) {
            if (ballH.posY > racketLeftH.position && ballH.posY <= racketLeftH.position + racketHeight) {
                ballH.speedX = -ballH.speedX;
                ballH.posX = racketWidth;
            }
        }
        if (ballH.posX >= fieldH.width - ballH.size - racketWidth) {
            if (ballH.posY > racketRightH.position && ballH.posY <= racketRightH.position + racketHeight) {
                ballH.speedX = -ballH.speedX;
                ballH.posX = fieldH.width - racketWidth - ballH.size;
            }
        }
        ballH.update();
        requestAnimationFrame(tickBall);
    };

    function moveRackets(e) {
        switch (e.code) {
            case 'ShiftLeft':
                racketLeftH.speed = -10;
                break;
            case 'ControlLeft':
                racketLeftH.speed = 10;
                break;
            case 'ArrowUp':
                racketRightH.speed = -10;
                break;
            case 'ArrowDown':
                racketRightH.speed = 10;
                break;
        }
    };

    function stopRackets(e) {
        switch (e.code) {
            case 'ShiftLeft':
                racketLeftH.speed = 0;
                break;
            case 'ControlLeft':
                racketLeftH.speed = 0;
                break;
            case 'ArrowUp':
                racketRightH.speed = 0;
                break;
            case 'ArrowDown':
                racketRightH.speed = 0;
                break;
        }
    };

    function tickRacketLeft() {
        racketLeftH.position += racketLeftH.speed;
        //останавливаем ракетку у верхнего края поля
        if (racketLeftH.position < 1) {
            racketLeftH.position = 0;
        }
        // останавливаем ракетку у нижнего края поля
        if (racketLeftH.position > fieldH.height - racketLeftH.height) {
            racketLeftH.position = fieldH.height - racketLeftH.height
        }
        racketLeftH.update();
        requestAnimationFrame(tickRacketLeft);
    }

    function tickRacketRight() {
        racketRightH.position += racketRightH.speed;
        //останавливаем ракетку у верхнего края поля
        if (racketRightH.position < 1) {
            racketRightH.position = 0;
        }
        // останавливаем ракетку у нижнего края поля
        if (racketRightH.position > fieldH.height - racketRightH.height) {
            racketRightH.position = fieldH.height - racketRightH.height
        }
        racketRightH.update();
        requestAnimationFrame(tickRacketRight);
    };

    function addKeyboardEvents() {
        document.addEventListener('keydown', moveRackets);
        document.addEventListener('keyup', stopRackets);
    };

    function startBall() {
        let side;
        if (Math.random() < 0.5) {
            side = 1
        } else {
            side = -1;
        }
        ballH.speedX = side * (Math.random() * 6 + 1);
        ballH.speedY = Math.random() * 6 + 1;
        requestAnimationFrame(tickBall);
    };

    function runBall() {
        ballH.update();
        let start = document.getElementById('start');
        start.addEventListener('click', startBall);
    };

    function start() {
        createTennis();
        addKeyboardEvents();
        runBall();
        tickRacketLeft();
        tickRacketRight();
    };

    start();

}());
