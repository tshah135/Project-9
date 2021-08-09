var btn_red;
var btn_green;

function setup() 
{
  createCanvas(400,400);

  btn_red = createButton("RED");
  btn_red.position(100, 50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(250, 50);
  btn_green.mousePressed(green_bg);
}

function red_bg()
{
  background(255, 0, 0);
}

function green_bg()
{
  background(0, 255, 0);
}

function draw() 
{
  background(30);

  if(mousePressed(btn_red)) 
  {
    red_bg();
  }
  
  if(mousePressed(btn_green)) 
  {
    green_bg();
  }
}






