// var game = {};
// game.init = function(){
//   setupModeButtons();
//   setupSquares();
//   reset();
// }
//
// game.init();

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

      reset();
    });
  }
}

function setupSquares() {
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.background;

      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct !";
        resetButton.textContent = 'Play Again ?'
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323"
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  //  pick a color
  pickedColor = pickColor();
  // change
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'NEW COLORS'
  messageDisplay.textContent = '';

  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }

  h1.style.background = 'steelblue';
}


resetButton.addEventListener('click', function(){
  colors = generateRandomColors(numSquares);
  //  pick a color
  pickedColor = pickColor();
  // change
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'NEW COLORS'
  messageDisplay.textContent = '';

  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }

  h1.style.background = 'steelblue';
});

colorDisplay.textContent = pickedColor;


function changeColors(color) {
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background =  color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = []
  // add num random colors to array
  for(var i = 0; i < num; i++){
    // get random color and push into arr
    arr.push(randomColor())
  }
  return arr;
}

function randomColor() {
  // pick red 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick green 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick blue 0 - 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}
