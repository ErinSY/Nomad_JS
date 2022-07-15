const form = document.querySelector("form");    //form tag
const inputbox = document.querySelector("#todo--iputBox");   // input tag
const list = document.querySelector("ul");     //ul tag
let toDo = [];

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
  toDo.push(newList)
  inputbox.value = ""; // 입력칸 비우기
  addlist(newList);
  saveitems();
}

function saveitems() {
  localStorage.setItem('Todo',JSON.stringify(toDo))  // JSON.stringify  => 객체였던 toDO배열을 문자열로 만들어준다. 

}

form.addEventListener("submit", listItems);

const savedTodoList = localStorage.getItem('Todo')
const parsedTodoList =JSON.parse(savedTodoList)
console.log(parsedTodoList)

if (savedTodoList!==null){
  toDo=parsedTodoList;
  parsedTodoList.forEach(addlist)
}