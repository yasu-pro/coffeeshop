const hamburger = document.getElementById("hamburger");
const gnav = document.getElementById("gnav");
const gnavArea = document.getElementById("gnavArea");
let isToggle = true;

hamburger.addEventListener(
  "click",
  () => {
    hamburger.classList.toggle("show");
    gnav.classList.toggle("show");
    if (isToggle === true) {
      isToggle = false;
      screenSize();
      gnavArea.classList.add("fadeIn");
      gnavArea.classList.remove("fadeout");
      gnavArea.style.right = 0 + "px";
    } else {
      isToggle = true;
      gnavArea.style.right = -90 + "%";
      gnavArea.classList.remove("fadeIn");
      gnavArea.classList.add("fadeout");
    }
  },
  false
);

function screenSize() {
  width = gnavArea.clientWidth;
  height = gnavArea.clientHeight;
  console.log(width);
  console.log(height);
}
