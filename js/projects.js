 
      const menuCheckbox = document.getElementById("menu-toggle");
      const menuLinks = document.querySelectorAll(".menu a");

      function toggleMenu() {
        document.body.classList.toggle("open");
      }

      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          document.body.classList.remove("open");
          menuCheckbox.checked = false;
        });
      });

      // ======== Abrir projectos ========
      function openProject(id) {
        switch (id) {
          case 1:
            window.open("https://open.spotify.com/", "_blank");
            break;
          case 2:
            window.open("https://www.youtube.com/", "_blank");
            break;
          case 3:
            window.open("https://www.instagram.com/", "_blank");
            break;
          default:
            alert("Projecto disponível em breve!");
        }
      }

      // ======== Animação dos cards ========
      const cards = document.querySelectorAll(".project-card");

      function animateCards() {
        cards.forEach((card) => {
          const cardTop = card.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;
          if (cardTop < screenHeight - 100) {
            card.classList.add("visible");
          }
        });
      }

      window.addEventListener("scroll", animateCards);
      window.addEventListener("load", animateCards);
   