let myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let counter = 1;

  function scrolltothetop() {
    const content = document.getElementById("content");
    const scrollBox = document.getElementById("scrollBox");

    const msg = document.createElement("div");
    msg.textContent = "Message " + counter++;
    content.appendChild(msg);

    scrollBox.scrollTop = 0;
  }
