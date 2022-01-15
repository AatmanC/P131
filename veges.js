img = "";

function preload(){
    img = loadImage('veges.jpg');
}

function setup(){
    canvas = createCanvas(640, 320);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 320);
    fill("#FFFFFF");
    text("Green", 4, 12);
    noFill();
    stroke("#FFFFFF");
    rect(2, 2, 240, 410);

    fill("#FFFFFF");
    text("Orange", 250, 12);
    noFill();
    stroke("#FFFFFF");
    rect(244, 2, 140, 410);

    fill("#FFFFFF");
    text("Red", 396, 12);
    noFill();
    stroke("#FFFFFF");
    rect(386, 2, 140, 410);

    fill("#FFFFFF");
    text("Purple", 538, 12);
    noFill();
    stroke("#FFFFFF");
    rect(528, 2, 110, 410);
}