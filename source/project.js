function main() {
    // square
    p1 = new Suica("exercise-square");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = square([0,0,0], 2 * 40); // default square
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];

    // point sqr-a1 for square
    var a1 = document.getElementById('sqr-a1');
    var pos = sqr.getPosition();
    a1.style.left = pos[0]-(2 * 20 + 17)+"px";
    a1.style.top = pos[1]-12+"px";

    // point sqr-a2 for square
    var a1 = document.getElementById('sqr-a2');
    var pos = sqr.getPosition();
    a1.style.left = pos[0]-5+"px";
    a1.style.top = pos[1]+(2 * 20 + 5)+"px";

    ////////////////////////////////////////////////////

    // rectangle
    p2 = new Suica("exercise-rectangle");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    rect = rectangle([0,0,0], [3 * 40, 2 * 40]); // default rectangle
    rect.mode = Suica.LINE;  
    rect.color = [0,0,0];

    // point rect-a for regtangle
    var a = document.getElementById('rect-a');
    var pos = rect.getPosition();
    a.style.left = pos[0]-(3 * 20 + 17)+"px";
    a.style.top = pos[1]-12+"px";

    // point rect-b for rectangle
    var b = document.getElementById('rect-b');
    var pos = rect.getPosition();
    b.style.left = pos[0]-5+"px";
    b.style.top = pos[1]+(2 * 20 + 5)+"px";

    ////////////////////////////////////////////////////

    // circle
    p3 = new Suica("exercise-circle");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    cir = circle([0,0,0], 2 * 40); // default circle
    cir.mode = Suica.LINE;  
    cir.color = [0,0,0];

    // center O of the circle and the raduis
    o = sphere([0, 0, 0], 4).custom({color:[0, 0, 0]});
    r1 = sphere([2 * 40, 0, 0], 1).custom({color:[0, 0, 0]});

    radius = cylinder(o.center, 1, 0).custom({color:[0, 0, 0]});
    var v = vectorPoints(o.center, r1.center);
    radius.height = Math.sqrt(scalarProduct(v, v));
    radius.focus = vectorPoints(r1.center, o.center);

    // radius cir-r for regtangle
    var r = document.getElementById('cir-r');
    var pos = cir.getPosition();
    r.style.left = pos[0]+(2 * 20)+"px";
    r.style.top = pos[1]-25+"px";
}

function onChangedSizeSquare(value) {
    if (value > 7 || value % 1 !== 0) {
        alert("Стойността на а трябва да е цяло число между 1 до 7!"); // otherwise is bigger than the canvas 'exercise-square'
        return;
    }
    
    document.getElementById("square-perimeter").innerHTML="P = " + value * 4;

    // set new square values
    p1 = new Suica("exercise-square");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = square([0,0,0], value * 40);
    sqr.mode = Suica.LINE;  
    sqr.color = [0,0,0];

    // point sqr-a1 for square
    var a1 = document.getElementById('sqr-a1');
    var pos = sqr.getPosition();
    a1.style.left = pos[0]-(value * 20 + 17)+"px";
    a1.style.top = pos[1]-12+"px";

    // point sqr-a2 for square
    var a1 = document.getElementById('sqr-a2');
    var pos = sqr.getPosition();
    a1.style.left = pos[0]-5+"px";
    a1.style.top = pos[1]+(value * 20 + 5)+"px";

}

function onChangedSizeRectangle() {
    valueA = document.getElementById("a2_size").value;
    valueB = document.getElementById("b_size").value;

    if (valueA > 7 || valueA % 1 !== 0) {
        alert("Стойността на а трябва да е цяло число между 1 до 7!"); // otherwise is bigger than the canvas 'exercise-regtangle'
        return;
    }

    if (valueB > 7 || valueB % 1 !== 0) {
        alert("Стойността на b трябва да е цяло число между 1 до 7!"); // otherwise is bigger than the canvas 'exercise-regtangle'
        return;
    }
    
    document.getElementById("rectangle-perimeter").innerHTML="P = " + (valueA * 2 + valueB * 2) ;

    // set new rectangle values
    p2 = new Suica("exercise-rectangle");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    rect = rectangle([0,0,0], [valueB * 40, valueA * 40]);
    rect.mode = Suica.LINE;  
    rect.color = [0,0,0];

    // point rect-a for regtangle
    var a = document.getElementById('rect-a');
    var pos = rect.getPosition();
    a.style.left = pos[0]-(valueB * 20 + 17)+"px";
    a.style.top = pos[1]-12+"px";

    // point rect-b for rectangle
    var b = document.getElementById('rect-b');
    var pos = rect.getPosition();
    b.style.left = pos[0]-5+"px";
    b.style.top = pos[1]+(valueA * 20 + 5)+"px";
}

function onChangedSizeCircle(value) {
    if (value > 5 || value % 1 !== 0) {
        alert("Стойността на r трябва да е цяло число между 1 до 5!"); // otherwise is bigger than the canvas 'exercise-circle'
        return;
    }
    
    document.getElementById("circle-perimeter").innerHTML="P = " + 2 * value + " * &pi;";

    // set new circle values
    p3 = new Suica("exercise-circle");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    cir = circle([0,0,0], value * 40);
    cir.mode = Suica.LINE;  
    cir.color = [0,0,0];

    // center O of the circle and the raduis
    o1 = sphere([0, 0, 0], 4).custom({color:[0, 0, 0]});
    o = sphere([value * 13, 0, 0], 1).custom({color:[0, 0, 0]});
    r1 = sphere([value * 40, 0, 0], 1).custom({color:[0, 0, 0]});

    radius = cylinder(o.center, 1, 0).custom({color:[0, 0, 0]});
    var v = vectorPoints(o.center, r1.center);
    radius.height = Math.sqrt(scalarProduct(v, v));
    radius.focus = vectorPoints(r1.center, o.center);

    // radius cir-r for regtangle
    var r = document.getElementById('cir-r');
    var pos = cir.getPosition();
    r.style.left = pos[0]+(value * 20)+"px";
    r.style.top = pos[1]-25+"px";
}