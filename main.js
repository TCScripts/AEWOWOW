function preload(){}
function setup(){
    canvas=createCanvas(350, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tint_colour="";
}
function draw(){
 image(video, 0, 0, 350, 300);
tint(tint_colour);

}
function filter_tint(){
    tint_colour=document.getElementById("colour_name").value;
}
function take_snapshot(){
    save("image.png");
}