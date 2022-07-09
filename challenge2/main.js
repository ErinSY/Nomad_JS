const body = document.body;
const mid = "mid";
const sm = "sm";
const full = "full";

function changeWindowC() {
  const windowwidth = window.innerWidth;
  if (windowwidth > 1000) {
    body.className = "full";
  } else if (windowwidth > 600 && windowwidth <= 1000) {
    body.classList.remove(full, sm);
    body.classList.add(mid);
  } else {
    body.classList.remove(mid, full);
    body.classList.add(sm);
  }
}

window.addEventListener("resize", changeWindowC);
