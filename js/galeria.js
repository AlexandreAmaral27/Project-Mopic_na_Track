
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

      // ===== GALERIA POPUP =====
      const popup = document.getElementById("popup");
      const popupImg = document.getElementById("popupImg");
      const popupVideo = document.getElementById("popupVideo");

      function openPopup(src, type) {
        popup.classList.add("active");

        if (type === "img") {
          popupImg.src = src;
          popupImg.style.display = "block";
          popupVideo.style.display = "none";
        } else {
          popupVideo.src = src;
          popupVideo.style.display = "block";
          popupImg.style.display = "none";
        }
      }

      function closePopup() {
        popup.classList.remove("active");
        popupVideo.pause();
      }
   