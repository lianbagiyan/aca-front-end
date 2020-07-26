document.getElementById("slider-left").onclick = sliderLeft;
autoSlider();
let left = 0;
var timer;

function sliderLeft() {
  const sliderBlock = document.getElementById("slider-block");
  left -= 100;
  if (left < -300) {
    left = 0;
    clearTimeout(timer);
  }
  sliderBlock.style.left = left + "px";
  autoSlider();
}

function autoSlider() {
  timer = setTimeout(sliderLeft, 2000);
}
