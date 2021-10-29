var open = document.getElementById("login")
var opens = document.getElementById("reg")
var close = document.getElementById("body")
// console.log(close)
// console.log(open)
open.addEventListener("click", function () {
  document.getElementById("containers2").style.display = "none"
  document.body.classList.add("popup-active");
})


document.addEventListener('DOMContentLoaded', function () {
  let message = document.querySelector('#message');
  // console.log('message :', message )

  if (message !== null) {
      setTimeout(function () {
        message.innerHTML = '';
        message.style.display = 'none';
      }, 3000);
  }
})