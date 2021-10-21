img = "";

function preload(){
    img = loadImage('tv and ac.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV", 60, 165);
    noFill();
    stroke("#FF0000");
    rect(50, 150, 280, 200);

    fill("#0000FF");
    text("Dressing Table", 360, 40);
    noFill();
    stroke("#0000FF");
    rect(350, 20, 280, 150);
}