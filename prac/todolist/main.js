const form = document.querySelector("form");    //form tag
const inputbox = document.querySelector("#todo--iputBox");   // input tag
const list = document.querySelector("ul");     //ul tag
 

function deleteitems(event) {
  console.dir(event);
  const li = event.target.parentElement;    //  event > path > target => 타겟요소를 정할 수 있다.
  li.remove();
}

function addlist(newList) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newList;
  const button = document.createElement("button");
  button.innerText = " X ";
  button.addEventListener("click", deleteitems);
  li.appendChild(span);
  li.appendChild(button);
  list.appendChild(li);
}

function listItems(event) {
  event.preventDefault();
  const newList = inputbox.value; // 입력값 변수에 담아주기
  inputbox.value = ""; // 입력칸 비우기
  addlist(newList);
}
form.addEventListener("submit", listItems);