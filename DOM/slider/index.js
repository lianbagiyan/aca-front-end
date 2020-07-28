document.getElementById("slider-right").onclick = sliderRight;
document.getElementById("slider-left").onclick = sliderLeft;
const sliderBlock = document.getElementById("slider-block");

let position = 0;
var timer;

function sliderRight() {
  clearTimeout(timer);
  position -= 100;
  if (position < -300) {
    position = 0;
  }
  sliderBlock.style.left = position + "px";
  autoSlider();
}

function sliderLeft() {
  clearTimeout(timer);
  position += 100;
  if (position < 300) {
    position = 0;
  }
  sliderBlock.style.left = position + "px";
}

function autoSlider() {
  timer = setTimeout(sliderRight, 3000);
}

autoSlider();