function main() {
    p = new Suica("exercise-square");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = square([0,0,0], 2 * 40); // default square
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];
}

function onChangedSizeSquare(value) {
    if (value > 7 || value % 1 !== 0) {
        alert("Стойността на а трябва да е цяло число между 1 до 7!");
        return;
    }
    
    document.getElementById("square-perimeter").innerHTML="P = " + value * 4;

    // set new quesre values
    p = new Suica("exercise-square");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = square([0,0,0], value * 40);
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];
}