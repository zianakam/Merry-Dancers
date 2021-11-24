var x;
var y;
var points = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#222222');

    x = 0;
    y = height / 2;
    tx = 0;
    ty = 5000;
    i = 0;

    while (x <= width && y >= 0 && x >= 0 && y <= height) {
        x++;
        y = map(noise(ty), 0, 1, 0, height);
        ty += 0.002;
        var p = createVector(x, y);
        points.push(p);
    }
}

//draw out two previous functions
var draw = function() {
    noStroke();

    for (var i = 0; i < points.length; i++) {
        ellipse(points[i].x, points[i].y, 1);
    }
};
