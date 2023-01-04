nose_x = 0;
nose_y = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup() {
   canvas = createCanvas(550,500);
   canvas.position(600,100);
   video = createCapture(VIDEO);
   video.size(550,500);
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);

}
function draw(){
    background("#969A97");
    fill("#F90093");
    stroke("#F90093");
    square(nose_x, nose_y, difference);
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = "+ nose_x + "and nose_y = "+ nose_y);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftwrist x = " + leftWristX + "and rightwrist x = "+ rightWristX + "and the difference = " + difference);
    }
}
function modelLoaded(){
    console.log("Model loaded");
}