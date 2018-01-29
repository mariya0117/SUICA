function main() {
    p = new Suica("exercise-square");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    // creating the squares
    sqr1 = square([0,0,0], 1* 40);
    sqr1.mode = Suica.LINE;  
    sqr1.color = [0,0,0];
    sqr1.visible = false;

    sqr2 = square([0,0,0], 2 * 40); // default square
    sqr2.mode = Suica.LINE;  
    sqr2.color = [0,0,0];

    sqr3 = square([0,0,0], 3 * 40);
    sqr3.mode = Suica.LINE;  
    sqr3.color = [0,0,0];
    sqr3.visible = false;

    sqr4 = square([0,0,0], 4 * 40);
    sqr4.mode = Suica.LINE;  
    sqr4.color = [0,0,0];
    sqr4.visible = false;

    sqr5 = square([0,0,0], 5 * 40);
    sqr5.mode = Suica.LINE;  
    sqr5.color = [0,0,0];
    sqr5.visible = false;

    sqr6 = square([0,0,0], 6 * 40);
    sqr6.mode = Suica.LINE;  
    sqr6.color = [0,0,0];
    sqr6.visible = false;

    sqr7 = square([0,0,0], 7 * 40);
    sqr7.mode = Suica.LINE;  
    sqr7.color = [0,0,0];
    sqr7.visible = false;
}

function onChangedSizeSquare(value) {
    if (value > 7 || value % 1 !== 0) {
        alert("Стойността на а трябва да е цяло число между 1 до 7!");
        return;
    }

    sqr1.visible = false;
    sqr2.visible = false;
    sqr3.visible = false;
    sqr4.visible = false;
    sqr5.visible = false;
    sqr6.visible = false;
    sqr7.visible = false;

    document.getElementById("p_size").value = value * 4;
    
    if (value == 1) {
        sqr1.visible = true;
    } else if (value == 2) {
        sqr2.visible = true;
    } else if (value == 3) {
        sqr3.visible = true;
    } else if (value == 4) {
        sqr4.visible = true;
    } else if (value == 5) {
        sqr5.visible = true;
    } else if (value == 6) {
        sqr6.visible = true;
    } else if (value == 7) {
        sqr7.visible = true;
    }
}