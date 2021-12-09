var spinePts = [];
var k = 0;
var j = 2;
var val = 0;
var inc;
var arc;

//Line not starting in mid anymore? Something to do w/var vs let?

//Called once when the prog starts
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#222222');

    let frequency = randomGaussian(55, 20);
    inc = TWO_PI / frequency;
    arc = randomGaussian(40, 15);

    spinePts.generatePoints();
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

    if (j == spinePts[k].x) {
        stroke('white');
        line(spinePts[j].x, spinePts[j].y, spinePts[j].x, spinePts[j].y + sin(val) * arc);
        val += inc;
        j+=5;
    }
};

spinePts.generatePoints = function() {
    let spineX = 0;
    let spineY = height / 2;
    let ty = 5000;

    while (spineX <= width && spineY >= 0 && spineX >= 0 && spineY <= height) {
        spineX++;
        spineY = map(noise(ty), 0, 1, 0, height);
        ty += 0.002;
        var p = createVector(spineX, spineY);
        spinePts.push(p);
    }
}