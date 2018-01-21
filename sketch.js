var data=" STRANGEROBOT";
var posA,posB;

function setup() { 
  createCanvas(550, 300);
  posA=new Array();
  posB=new Array();
  
  for(var i=1;i<13;i++)
{		
    posA[i]=random(100,width-100);
    posB[i]=random(50,200);
}
} 


function draw() { 
  background(0);
  textSize(20);
  fill(255);
  noStroke();
  
for(var i=1;i<13;i++)
{		
  if(millis()%100<1)
  {
    //posA[i]=random(100,width-100);
    posB[i]=random(100,200);
  }	
  	rectMode(CORNERS);
  	rect(i*40,50,i*40+5,posB[i]-40);
    text(data[i],i*40,20+posB[i]);
}
}