function myFunction(x) {
  x.classList.toggle("change");
}

const navSlide = () => {
  const container = document.querySelector('.container');
  const nav = document.querySelector('.nav-links');

  container.addEventListener('click', ()=> {
    nav.classList.toggle('nav-active');
  });
}
navSlide();