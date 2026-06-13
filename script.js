const hiddenElements = document.querySelectorAll('.Anim');

function showElements() {
  hiddenElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 100) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showElements);
showElements();
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.add('showBtn');
  } else {
    topBtn.classList.remove('showBtn');
  }
});
