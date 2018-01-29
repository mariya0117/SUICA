function main() {
    // square
    p = new Suica("exercise-square");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = square([0,0,0], 2 * 40); // default square
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];

    // rectangle
    p = new Suica("exercise-rectangle");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = rectangle([0,0,0], [3 * 40, 2 * 40]); // default rectangle
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];

    // circle
    p = new Suica("exercise-circle");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = circle([0,0,0], 2 * 40); // default circle
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];
}

function onChangedSizeSquare(value) {
    if (value > 7 || value % 1 !== 0) {
        alert("Стойността на а трябва да е цяло число между 1 до 7!"); // otherwise is bigger than the canvas 'exercise-square'
        return;
    }
    
    document.getElementById("square-perimeter").innerHTML="P = " + value * 4;

    // set new square values
    p = new Suica("exercise-square");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = square([0,0,0], value * 40);
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];
}

function onChangedSizeRectangle(value) {
    if (value > 7 || value % 1 !== 0) {
        alert("Стойността на а трябва да е цяло число между 1 до 7!"); // otherwise is bigger than the canvas 'exercise-regtangle'
        return;
    }
    
    document.getElementById("rectangle-perimeter").innerHTML="P = " + value * 4;

    p = new Suica("exercise-rectangle");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = rectangle([0,0,0], [3 * 40, 2 * 40]); // default rectangle
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];
}

function onChangedSizeCircle(value) {
    if (value > 5 || value % 1 !== 0) {
        alert("Стойността на r трябва да е цяло число между 1 до 5!"); // otherwise is bigger than the canvas 'exercise-circle'
        return;
    }
    
    document.getElementById("circle-perimeter").innerHTML="P = " + 2 * value + " * &pi;";

    // set new circle values
    p = new Suica("exercise-circle");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = circle([0,0,0], value * 40);
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];
}