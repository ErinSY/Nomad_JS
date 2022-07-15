// const time  = new Date();
// const ptag = document.querySelector('p');
// const hour = time.getHours();
// const minutes = time.getMinutes();
// const sec = time.getSeconds();

function timeFunction() {
const time  = new Date();
const ptag = document.querySelector('p');
const hour = time.getHours();
const minutes = time.getMinutes();
const sec = time.getSeconds();
ptag.innerHTML = ( `${hour} :  ${minutes} : ${sec}`)


}



window.onload = function () {
  setInterval(timeFunction,1000)
}