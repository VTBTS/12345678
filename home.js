imgs="";
img=[];
status="";
objects=[];
percent="";
function Bedroom(){
  window.location="Dectection.html";
  img="bedroom";
}

function Libarary(){
  window.location="Dectection.html";
   imgs="library";
}

function kitchen(){
  window.location="Dectection.html";
    imgs="kitchen";
}

status="";
function preload(){
  if(imgs =="bedroom"){
    img=loadImage('bedroom.jpg');
  }
  if(imgs=="library"){
    img=loadImage('libraryjpg.jpg');
  }
  if(imgs="kitchen"){
    img=loadImage('kitchen.jpg');
  }
}

function setup(){
   canvas=createCanvas(640,420);
   canvas.center();
   objectDectector= ml5.objectDetector('cocossd', Modelloaded);
   document.getElementById("status").innerHTML="Status : Dectecting Objects";
}


function draw(){
  image(img,0,0,640,420);

  if(status !="");{
      for(var i = 0; i <  objects.length; i++){
          document.getElementById("status").innerHTML= "Status : Objects Detected";
      fill("#ff00f2");
      percent= floor(objects[i].confidence*100);
      text(objects[i].label+""+ percent+"%", objects[i].x+15, objects[i].y+15);
      noFill();
      fill("FF0000");
      noFill();
      stroke("#1717d1");
      rect(objects[i].x, objects[i].y,objects[i].width,objects[i].height);
}
}
}
function Modelloaded(){
    console.log("Loaded!");
    objectDectector.detect(img, gotResult);
}

function gotResult(error, result){
     if(error){
     console.log(error);
}
    console.log(result);
}