const text = "Mohammad Yusuf — Aspiring Software Engineer";
let index = 0;
function typeEffect() {
  document.getElementById("typing").textContent = text.slice(0, index);
  index++;
  if (index <= text.length) {
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;
