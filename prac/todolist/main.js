const form = document.querySelector('form')
const inputbox = document.querySelector('input')
const list = document.querySelector('ul')

function listItems (event){
  event.preventDefault();
  const newList = inputbox.value;   // 입력값 변수에 담아주기
  inputbox.value = '' ;              // 입력칸 비우기
  addlist(newList)
}

function addlist (newList) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  list.appendChild(li)
  li.appendChild(span);
  span.innerText = newList;

}

form.addEventListener('submit',listItems)