// Menu Responsivo
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Animação ao rolar (reveal)
const cards = document.querySelectorAll(".projecto-card");

function revealCards() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach((card) => {
    const boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
