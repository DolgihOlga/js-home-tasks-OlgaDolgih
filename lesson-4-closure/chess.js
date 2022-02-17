function drawChess(height, width) {
    var elem1 = "#";
    var elem2 = " ";
    var result = "";
    for (var i = 1; i <= height; i++) {
        for (var j = 1; j <= width; j++) {
            if ((i + j) % 2 === 0) {
                result += elem1;
            } else {
                result += elem2;
            }
        }
        result += "\n";
    }
    return result;
}

console.log(drawChess(8, 8));
