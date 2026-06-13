const hiddenElements = document.querySelectorAll('.Anim');

function showElements() {
  hiddenElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 100) {
      element.classList.add('show');
    }
  });
}

let btn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("showBtn");
  } else {
    btn.classList.remove("showBtn");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
