const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  mouseover: function () {
    hi.innerText = "The mouse is here!";
    hi.style.color = colors[0];
  },
  mouseleaves: function () {
    hi.innerText = "The mouse is gone!";
    hi.style.color = colors[1];
  },
  resizedwindow: function () {
    hi.innerText = "You just resized!";
    hi.style.color = colors[2];
  },
  rightclick: function () {
    hi.innerText = "That was a right click!";
    hi.style.color = colors[3];
  },
};

const hi = document.querySelector("h2");

hi.addEventListener("mouseover", superEventHandler.mouseover);
hi.addEventListener("mouseleave", superEventHandler.mouseleaves);
window.addEventListener("resize", superEventHandler.resizedwindow);
window.addEventListener("contextmenu", superEventHandler.rightclick);
