function main() {
    // square
    p1 = new Suica("exercise-square");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr = square([0, 0, 0], 2 * 40); // default square
    sqr.mode = Suica.LINE;
    sqr.color = [0, 0, 0];

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

    rect = rectangle([0, 0, 0], [3 * 40, 2 * 40]); // default rectangle
    rect.mode = Suica.LINE;
    rect.color = [0, 0, 0];

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

    cir = circle([0, 0, 0], 2 * 40); // default circle
    cir.mode = Suica.LINE;
    cir.color = [0, 0, 0];

    // center O of the circle and the raduis
    o = sphere([0, 0, 0], 4).custom({color:[0, 0, 0]});
    r1 = sphere([2 * 40, 0, 0], 1).custom({color:[0, 0, 0]});

    radius = cylinder(o.center, 1, 0).custom({color:[0, 0, 0]});
    radius.height = distance(o, r1);
    radius.focus = vectorPoints(r1.center, o.center);

    // radius cir-r for regtangle
    var r = document.getElementById('cir-r');
    var pos = cir.getPosition();
    r.style.left = pos[0]+(2 * 20)+"px";
    r.style.top = pos[1]-25+"px";

    ////////////////////////////////////////////////////

    // exercise
    p4 = new Suica("exercise");
    background([218 / 255, 226 / 255, 248 / 255, 1]);
    orthographic(-10000, 10000);
    lookAt([0, 0, 100], [0, 0, 0], [0, 1, 0]);

    sqr2 = square([0, 0, 0], 5 * 40); // square 5 sm
    sqr2.mode = Suica.LINE;
    sqr2.color = [0, 0, 0];

    A = sphere([-100, -100, 0], 4).custom({color:[1, 0, 0]});
    B = sphere([180, -100, 0], 4).custom({color:[1, 0, 0]});
    C = sphere([180, -20, 0], 4).custom({color:[1, 0, 0], interactive:true});
    D = sphere([-100, -20, 0], 4).custom({color:[1, 0, 0]});

    AB = cylinder(A.center, 1, 0).custom({color:[1, 0, 0]});
    BC = cylinder(B.center, 1, 0).custom({color:[1, 0, 0]});
    CD = cylinder(C.center, 1, 0).custom({color:[1, 0, 0]});
    DA = cylinder(D.center, 1, 0).custom({color:[1, 0, 0]});

    AB.height = distance(A, B);
    AB.focus = vectorPoints(B.center, A.center);
    
    BC.height = distance(B, C);
    BC.focus = vectorPoints(C.center, B.center);
    
    CD.height = distance(C, D);
    CD.focus = vectorPoints(D.center, C.center);
    
    DA.height = distance(D, A);
    DA.focus = vectorPoints(A.center, D.center);
    
    p4.gl.canvas.addEventListener('mousedown',mouseDown,false);
    p4.gl.canvas.addEventListener('mouseup',mouseUp,false);
    p4.gl.canvas.addEventListener('mouseleave',mouseUp,false);
    p4.gl.canvas.addEventListener('mousemove',mouseMove,false);
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

function distance(p, q) {
    var v = vectorPoints(p.center,q.center);
    return Math.sqrt(scalarProduct(v,v));
}

var obj;
autoInt = false;
gentle = 1;
var c_xold = 180;
var c_yold = -20;

function adjustSides() {

    if (Math.abs(C.center[0] - D.center[0]) + Math.abs(C.center[1] - B.center[1]) != 360) {
        C.center[0] = c_xold;
        C.center[1] = c_yold;
    } else {
        B.center[0] = C.center[0];
        D.center[1] = C.center[1];
    
        AB.height = distance(A, B);
        AB.focus = vectorPoints(B.center, A.center);
    
        BC.height = distance(B, C);
        BC.focus = vectorPoints(C.center, B.center);
    
        CD.height = distance(C, D);
        CD.focus = vectorPoints(D.center, C.center);
    
        DA.height = distance(D, A);
        DA.focus = vectorPoints(A.center, D.center);
    }
}

function mouseDown(event) {
    x = event.clientX;
    y = event.clientY;
    obj = p4.objectAtPoint(x,y);
    console.log("down");
    console.log(obj);
}

function mouseUp(event) {
    if (obj) {
        if (autoInt) {
            obj.center[0] = SCALE/2*Math.round(obj.center[0]/SCALE*2);
            obj.center[1] = SCALE/2*Math.round(obj.center[1]/SCALE*2);
        }

        adjustSides();
        c_xold = C.center[0];
        c_yold = C.center[1];
    }

    obj = undefined;
}


function mouseMove(event) {
    if (obj) {
        obj.center[0] += (event.clientX-x)/gentle;
        obj.center[1] -= (event.clientY-y)/gentle;
        obj.center[0] = Math.max(obj.center[0],-250)
        obj.center[0] = Math.min(obj.center[0],+250)
        obj.center[1] = Math.max(obj.center[1],-150)
        obj.center[1] = Math.min(obj.center[1],+150)
        adjustSides();
        c_xold = C.center[0];
        c_yold = C.center[1];
    }

    x = event.clientX;
    y = event.clientY;

    if ( !navigator.systemLanguage ) {
        if (obj || p4.objectAtPoint(x,y))
            p4.gl.canvas.style.cursor = 'all-scroll';
        else
            p4.gl.canvas.style.cursor = 'auto';
    }
}