var ball   = document.querySelector('.ball');
var board = document.querySelector('.board');
var output = document.querySelector('.output');
var target = document.querySelector('.target');

let x = 0;
let y = 0;
let score = 0;

function handleOrientation(event)
{
  x = event.beta; 
  y = event.gamma; 

  output.innerHTML  = "Beta : " + x + "\n";
  output.innerHTML += "Gamma: " + y + "\n";
  output.innerHTML  = "Score : " + score + "\n";

  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

}
// zmienne
let s = 1;
let xx = 0;
let yy = 0;
let xp = 0;
let yp = 0;
let speed = setInterval(speedd, 15);

//funkceja nadająca kulce naturalną prędkość

function speedd()
{
  s = 0.04;
    
  xx += x*s;
  yy += y*s;
  ball.style.top  = (300 + xx) + "px";
  ball.style.left = (300 + yy) + "px";
  

  //po wyjściu za ramke, gra się kończy
  if (xx >= 280 || xx <= -300 || yy >= 280 || yy <= -300)
  {
    gameOver();
  }
  if(score == 0 && xx>=250 && xx<=270 && yy>=250 && yy<=270)
  {
    score += 1;
  }
  if(score == 1 && xx>=250 && xx<=270 && yy>=-250 && yy<=-270)
  {
    score += 1;
  }
  if(score == 2 && xx>=-250 && xx<=-270 && yy>=-250 && yy<=-270)
  {
    score += 1;
  }
  if(score == 3 && xx>=-250 && xx<=-270 && yy>=250 && yy<=270)
  {
    score += 1;
  }
  if(score == 4)
  {
    wingame();
  }

}


function gameOver()
{
  xx = 0;
  yy = 0;
  score = 0;
}

function wingame()
{
  window.alert("You won!");
}

window.addEventListener('deviceorientation', handleOrientation);