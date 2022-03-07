objects=[];
status_object="";
var r,g,b;
function preload(){
   
}
function setup() {
  canvas=createCanvas(640,420);
  canvas.center();
  detector=ml5.objectDetector("cocossd",modelLoaded);
  video=createCapture(VIDEO);
  video.hide();
}
function draw() {
  image(video,0,0,640,420);  
 /* r=Math.random()*255;
g=Math.random()*255;
b=Math.random()*255;*/

if(status_object=="true"){
  detector.detect(video,gotResult);
  changeColour();
 for(var i=0;i<objects.length; i++){
   
  //object_x=Math.floor(objects[i].normalized.x*1000);
  //object_y=Math.floor(objects[i].normalized.y*1000);
 // object_height=Math.floor(objects[i].normalized.height*1000);
  //object_width=Math.floor(objects[i].normalized.width*1000);
  object_x=Math.floor(objects[i].x);
  object_y=Math.floor(objects[i].y);
 object_height=Math.floor(objects[i].height);
  object_width=Math.floor(objects[i].width);
  object_name=objects[i].label;
  object_confidence=Math.floor(objects[i].confidence*100)+"%";
  noFill();
  rect(object_x,object_y,object_width,object_height);
  fill(r,g,b);
    stroke(r,g,b);
  text(object_name+","+object_confidence,object_x,object_y);
  document.getElementById("number_of_objects").innerHTML="Number of Objects detected : "+objects.length;
 }
  
}
}
function modelLoaded() {
  console.log("model is loaded");
  
  status_object="true";
  document.getElementById("status").innerHTML="Status : objects are being detected";

}

function gotResult(error,results){
  
  if(error){
    console.error(error);
  }
  else {
    console.log(results);
    objects=results;
  }
  
}

function changeColour(){
  setTimeout(function(){
  r=random(255);
  g=random(255);
  b=random(255);
  },5000);
}

