// function getValueInput() {
//   let maxNum = document.querySelector("#user").value;
//   document.querySelector("#valueInput").innerHTML = `Max Num: ${maxNum}`;
//   //alert(maxNum);
// }
const typeForm = document.querySelector("#typeForm");
const inputbox = document.querySelector("#typeForm #user");
const button = document.querySelector("#typeForm #button");

const secondNum = document.querySelector("#typeForm #second");
function fucs(event) {
  event.preventDefault();
  const maxNum = Number(inputbox.value);
  const secNum = Number(secondNum.value);
  // typeForm.classList.add("hidden");
  //  document.querySelector("#valueInput").innerHTML = maxNum;
  //  document.querySelector("#secondNumber").innerHTML = secondNum.value;
  const randomNum = random(maxNum);
  document.querySelector(
    "#valueInput"
  ).innerHTML = `You chose : ${secNum}, the machine chose : ${randomNum} `;

  const result = compare(randomNum, secNum);
  document.querySelector("#result").innerHTML = result;
}

function compare(randomNum, inputNum) {
  if (randomNum === inputNum) {
    console.log(randomNum, inputNum);
    return `You Won!`;
  } else {
    console.log(randomNum, inputNum);
    return `You lost!`;
  }
}

function random(a) {
  let random = Math.floor(Math.random() * a);
  // let random = Math.random() * a;
  return random;
}

typeForm.addEventListener("submit", fucs);
