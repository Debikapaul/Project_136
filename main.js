status="";

function setup(){
    canvas=createCanvas(480,280);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(480,280);
    video.hide();
}

function draw(){
    image(video,0,0,480,280);
}

function start(){
    objectDectected=ml5.objectDectector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= " Status = Detecting objects ";
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}