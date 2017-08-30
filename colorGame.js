var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;

    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct !";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323"
      messageDisplay.textContent = "Try Again";
    }
  });
}

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
