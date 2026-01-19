const myButton = document.getElementById("myBtn");
};

myButton.style.display = "none";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20) ||
    document.documentElement.scrollTop > 20
  ) {
    myButton.style.display = "block";
}   else {
    myButton.style.display = "none";
  }
}
