var spineX;
var spineY;
var spinePts = [];
var k = 0;
var j = 2;
var val = 0;
var inc;

//Called once when the prog starts
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#222222');

    spineX = 0;
    spineY = height / 2;
    var ty = 5000;

    while (spineX <= width && spineY >= 0 && spineX >= 0 && spineY <= height) {
        spineX++;
        spineY = map(noise(ty), 0, 1, 0, height);
        ty += 0.002;
        var p = createVector(spineX, spineY);
        spinePts.push(p);
    }
}

//Called directly after setup(), the draw() function continuously
//executes the lines of code contained inside its block until the
//program is stopped or noLoop() is called.
var draw = function() {
    noStroke();

    if (k <= width && k >= 0) {
        ellipse(spinePts[k].x, spinePts[k].y, 1);
        k++;
    }

    inc = TWO_PI / 50;

    if (j == spinePts[k].x) {
        stroke('white');
        line(spinePts[j].x, spinePts[j].y, spinePts[j].x, spinePts[j].y + sin(val) * 20);
        val += inc;
        j+=5;
    }
};
