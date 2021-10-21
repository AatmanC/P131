img = "";

function preload(){
    img = loadImage('download.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 110, 170);
    noFill();
    stroke("#FF0000");
    rect(100, 150, 400, 250);

    fill("#0000FF");
    text("Dressing Table", 460, 90);
    noFill();
    stroke("#0000FF");
    rect(450, 75, 200, 300);

    fill("#00FF00");
    text("Curtain", 340, 110);
    noFill();
    stroke("#00FF00");
    rect(330, 95, 125, 200);
}