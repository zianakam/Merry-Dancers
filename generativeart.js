//Line work
var spinePts = [];
var k, j;
var val;
var inc;
var waveHeight;
//Colour
var h1, s1, l1, a;
//Other Lines
var newLine;
var spinePts2 = [];

//TODO: Add possibility of multiple lines

/**
 * Called at beginning of the program.
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#222222');

    setLineWorkValues();
    generatePoints(spinePts);
    newLine = true;
    draw();
}

/**
 * Called directly after setup(), the draw() function continuously
 * executes the lines of code contained inside its block until the
 * program is stopped or noLoop() is called.
 */
var draw = function() {
    noStroke();
    generateColour();

    if (k < spinePts.length) {
        fill(h1, s1, l1, a);
        ellipse(spinePts[k].x, spinePts[k].y, 1);
        k++;
    }

    if (j == spinePts[k].x) {
        stroke(h1, s1, l1, a);
        line(spinePts[j].x, spinePts[j].y, spinePts[j].x, spinePts[j].y + sin(val) * waveHeight);
        val += inc;
        j+=5;
        h1++;
    }

    /**
    if (spinePts[k].x == width && newLine == true) {
        newLine = false;
    }**/
};

/**
 * Set initial values for linework.
 */
setLineWorkValues = function() {
    let frequency;

    if (windowWidth <= 2000 ) { //<= 2000 then keep height & freq otherwise
        waveHeight = randomGaussian(40, 15);
        frequency = randomGaussian(60, 10);
    } else { //higher height, less frequency
        waveHeight = randomGaussian(60, 15);
        frequency = randomGaussian(40, 10);
    }

    inc = TWO_PI / frequency;
    k = 0;
    j = 2;
    val = 0;

    colorMode(HSL);
    h1 = random(359);
    s1 = random(100);
    l1 = random(90);
    a = 0;
}

/**
 * Generate points of the spine using perlin noise.
 */
generatePoints = function(spinePts) {
    let spineX = 0;
    let spineY = random(0, height);
    let ty = 5000;

    while (spineX <= width && spineY >= 0 && spineX >= 0 && spineY <= height) {
        spineX++;
        spineY = map(noise(ty), 0, 1, 0, height);
        ty += 0.002;
        let p = createVector(spineX, spineY);
        spinePts.push(p);
    }
}

/**
 * Calculates colour values based on distance from edges of screen.
 */
generateColour = function() {
    let dist1 = dist(0, height/2, spinePts[k].x, spinePts[k].y);
    let dist2 = dist(width, height/2, spinePts[k].x, spinePts[k].y);

    if (dist1 < dist2) {
        a = map(dist1, 0, width, 0.3, 1);
        s1 = map(dist1, 0, width, 50, 100);
    } else {
        a = map(dist2, 0, width, 0.3, 1);
        s1 = map(dist1, 0, width, 50, 100);
    }
}

