//let slider;
let button;
let input;
let myTitle;
let myButton;
let buttonPush;
let myString;
let sel;
let myFont;
let myFontIndie;
let myFontDance;
let myFontMarker;
//let myFontAbel;
let itemSelected;

function preload(){
  myFont = loadFont('./fonts/Bellota/Bellota-Regular.ttf');
  myFontIndie = loadFont('./fonts/Indie_Flower/IndieFlower-Regular.ttf');
  myFontDance = loadFont('./fonts/Dancing_Script/static/DancingScript-Regular.ttf');
  myFontMarker = loadFont('./fonts/Permanent_Marker/PermanentMarker-Regular.ttf');

}

function setup() {
  // put setup code here


createCanvas(1440,600);
background(0);
button = createButton('Submit');
button.position(168,720);//168,66
button.mousePressed(changeBG);


myString = '';
itemSelected = 'red';


myButton = select('#myButton');
myButton.mousePressed(buttonPressed);

buttonPush = 1;

input = createInput();
input.position(20, 720);

myTitle = select('#myTitle');

//button = createButton('submit');
  //button.position(input.x + input.width, 65);
  //button.mousePressed(buttonFunction);

//colorMode(HSB);
//slider = createSlider(0, 180, 60, 40);
//slider.position(10, 10);
//slider.style('width', '85px');

sel = createSelect();
sel.position(230,720);
sel.option('Bellota');
sel.option('Indie Flower');
sel.option('Marker');
sel.option('Dancing Script');
sel.changed(changeFont);
  }

function draw() {

itemSelected = sel.value();
//let val = slider.value();
//background(val, 100, 100, 1);
myFunction(1450, 600);

  }

function changeBG(){
  myString = input.value();
  let val = random(255);
  background(val);
}


function myFunction(myWidth,myHeight){
  text(myString, random(myWidth), random(myHeight));
}


function buttonPressed(){
  buttonPush = buttonPush +1;
  if (buttonPressed === 1){
    myTitle.html ('Hello!');
  }else if (buttonPush === 2){
    myTitle.html('How are you?');
  } else if (buttonPush === 3){
  myTitle.html('Tired?');
} else if (buttonPush === 4){
  myTitle.html('I can relate...');
} else if (buttonPush === 5){
  myTitle.html('Nap Time!!😴');
   }
}

function changeFont(){
let font = sel.value();

if (font === 'Bellota'){
  textFont(myFont);
}else if(font === 'Dancing Script'){
  textFont(myFontDance);
}else if (font === 'Marker'){
  textFont(myFontMarker);
}else if (font === 'Indie Flower'){
  textFont(myFontIndie);
}
}
