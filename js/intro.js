
      const intro = document.getElementById("intro");
      const menuCheckbox = document.getElementById("menu-toggle");
      const menuLinks = document.querySelectorAll(".menu a");
      const introSound = document.getElementById("introSound");

      window.addEventListener("load", () => {
        introSound.play().catch(() => console.log("Som bloqueado pelo navegador"));
        setTimeout(() => {
          intro.classList.add("hidden");
        }, 3000);
      });

      function toggleMenu() {
        document.body.classList.toggle("open");
      }

      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          document.body.classList.remove("open");
          menuCheckbox.checked = false;
        });
      });
 