//Linework
var spinePts = [];
var k = 0;
var j = 2;
var val = 0;
var inc;
var waveHeight;
//Colour
var r1, g1, b1, r2, g2, b2;

//TODO: Add colour
//TODO: Add possibility of multiple lines

/**
 * Called at beginning of the program.
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#222222');

    let frequency = randomGaussian(60, 10);
    inc = TWO_PI / frequency;
    waveHeight = randomGaussian(40, 15);
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);

    spinePts.generatePoints();
}

/**
 * Called directly after setup(), the draw() function continuously
 * executes the lines of code contained inside its block until the
 * program is stopped or noLoop() is called.
 */
var draw = function() {
    noStroke();

    if (k <= width && k >= 0) {
        ellipse(spinePts[k].x, spinePts[k].y, 1);
        k++;
    }

    if (j == spinePts[k].x) {
        //interpolate old rgb to new rgb
        let inter = lerpColor(color(r1, g1, b1, 150), color(r2, g2, b2, 150), 0.10);
        stroke(inter);
        line(spinePts[j].x, spinePts[j].y, spinePts[j].x, spinePts[j].y + sin(val) * waveHeight);
        val += inc;
        j+=5;
    }
};

/**
 * Generate points of the spine using perlin noise.
 */
spinePts.generatePoints = function() {
    let spineX = 0;
    let spineY = height / 2;
    let ty = 5000;

    while (spineX <= width && spineY >= 0 && spineX >= 0 && spineY <= height) {
        fill(r1, g1, b1, 150);
        spineX++;
        spineY = map(noise(ty), 0, 1, 0, height);
        ty += 0.002;
        let p = createVector(spineX, spineY);
        spinePts.push(p);
    }
}