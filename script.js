var colors = randomcolors(6);
var squares = document.querySelectorAll('.square');
var selectedColor = colors[selectcolor()];
var rgb = document.querySelector('#rgb');
rgb.textContent = selectedColor;
var result = document.querySelector('#result');
var header = document.querySelector('#header');
var reset = document.querySelector('#reset');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var row2 = document.querySelector('#row2');
var bar = document.querySelector('.bar');
var isEasy = false;

reset.addEventListener('click', function() {
  if(isEasy == false) {
    resetColors(6);
  }
  else {
    console.log('test!');
    resetColors(3);
  }
})

function resetColors(x) {
  colors = randomcolors(x);
  console.log(colors);
  selectedColor = colors[selectcolor()];
  rgb.textContent = selectedColor;
  header.style.background = "#31618f";
  reset.textContent = "NEW COLORS";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function() {
    if(this.style.background == selectedColor){
      for (var j = 0; j < squares.length; j++) {
          squares[j].style.background = selectedColor;
          header.style.background = selectedColor;
          result.textContent = "CORRECT!";
          reset.textContent = "PLAY AGAIN?";
      }
    }
    else {
      this.style.background = "#232323";
      result.textContent = "TRY AGAIN!";
    }
  })
}

function selectcolor() {
  var randomnum = Math.floor(Math.random() * colors.length);
  return randomnum;
}

function randomcolors(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    var randomcol = randomcolorgenerator();
    arr[i]=randomcol;
  }
  return arr;
}

function randomcolorgenerator() {
  var col1 = Math.floor(Math.random() * 256);
  var col2 = Math.floor(Math.random() * 256);
  var col3 = Math.floor(Math.random() * 256);
  return "rgb(" + col1 + ", " + col2 + ", " + col3 + ")";
}

easy.addEventListener('click',function() {
  hard.classList.remove("selected");
  easy.classList.add("selected");
  isEasy = true;
  resetColors(3);
  row2.style.display = "none";
})

hard.addEventListener('click',function() {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  isEasy = false;
  resetColors(6);
  row2.style.display = "unset";
})
