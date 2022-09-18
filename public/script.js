
//sticky navbar
let header = document.querySelector(".navbar");
let storData = header.offsetTop;
window.addEventListener("scroll", function (e) {
  if (window.scrollY >= storData) {
    header.classList.add("fixednav");
  } else {
    header.classList.remove("fixednav");
  }
});

