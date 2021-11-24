var spineX;
var spineY;
var spinePts = [];
var extX;
var extY;
var extensionPts = [];

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

    for (var j = 2; j < width; j+=5) {
        extX = spinePts[j].x;
        extY = spinePts[j].y;
        var maxHeight = random(0, spinePts[j].y);
        for (var y = extY; y > maxHeight; y--) {
            var p = createVector(extX, extY);
            extY--;
            extensionPts.push(p);
        }
    }
}

//Called directly after setup(), the draw() function continuously
//executes the lines of code contained inside its block until the
//program is stopped or noLoop() is called.
var draw = function() {
    noStroke();

    for (var i = 0; i < spinePts.length; i++) {
        ellipse(spinePts[i].x, spinePts[i].y, 1);
    }

    for (var j = 0; j < extensionPts.length; j++) {
        ellipse(extensionPts[j].x, extensionPts[j].y, 1);
    }
};
