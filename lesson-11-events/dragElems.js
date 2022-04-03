'use strict';

var container = document.getElementById('container');
var dragImage = null;
var dragShiftX;
var dragShiftY;

container.addEventListener('mousedown', dragStart);

function dragStart(e) {
    e.preventDefault();
    dragImage = e.target;
    dragImage.style.position = 'absolute';
    dragImage.style.zIndex = '1';
    dragImage.style.cursor = 'grab';
    //получаем положение курсора мыши при запуске:
    dragShiftX = e.clientX;
    dragShiftY = e.clientY;
    console.log(dragShiftX);
    console.log(dragShiftY);
    dragImage.addEventListener('mouseup', dragStop);
    //вызываем функцию при каждом перемещении курсора:
    dragImage.addEventListener('mousemove', dragMove);
}

function dragMove(e) {
    e.preventDefault();
    dragImage = e.target;
    dragImage.style.zIndex = '5';
    // вычисляем новое положение курсора:
    var currentX = dragShiftX - e.clientX;
    var currentY = dragShiftY - e.clientY;
    dragShiftX = e.clientX;
    dragShiftY = e.clientY;
    // устанавливаем новое положение элемента:
    dragImage.style.top = (dragImage.offsetTop - currentY) + "px";
    dragImage.style.left = (dragImage.offsetLeft - currentX) + "px";

}

function dragStop() {
    //остановка перемещения при отпускании кнопки мыши:
    dragImage.style.zIndex = '1';
    dragImage.removeEventListener('mouseup', dragStop);
    dragImage.removeEventListener('mousemove', dragMove);
}

