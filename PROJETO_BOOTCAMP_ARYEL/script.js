document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.querySelector(".cards");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");

  btnPrev.addEventListener("click", () => {
    carrossel.scrollBy({ left: -300, behavior: "smooth" });
  });

  btnNext.addEventListener("click", () => {
    carrossel.scrollBy({ left: 300, behavior: "smooth" });
  });

  const titulo = document.querySelector(".eventos h1");
  setTimeout(() => {
    titulo.classList.add("animate");
  }, 100);
});
