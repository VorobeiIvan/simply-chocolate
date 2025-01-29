document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector(".burger-menu-button");
    const closeButton = document.querySelector(".close-button");
    const overlay = document.querySelector(".overlay");
  
    // Функція відкриття меню
    function openMenu() {
      overlay.classList.remove("visually-hidden");
      document.body.style.overflow = "hidden"; // Блокуємо прокрутку сторінки
    }
  
    // Функція закриття меню
    function closeMenu() {
      overlay.classList.add("visually-hidden");
      document.body.style.overflow = ""; // Відновлюємо прокрутку
    }
  
    // Обробники подій
    burgerButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
  
    // Закриття при кліку поза меню
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        closeMenu();
      }
    });
  
    // Закриття при натисканні Esc
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !overlay.classList.contains("visually-hidden")) {
        closeMenu();
      }
    });
  });
  


//   ______________________________________________________________

document.addEventListener("DOMContentLoaded", function () {
    const openMenuButton = document.querySelector(".reviews-button");
    const closeMenuButton = document.querySelector(".reviews-close-button");
    const overlay = document.querySelector(".reviews-overlay");
  
    // Функція відкриття меню
    function openMenu() {
      overlay.classList.remove("visually-hidden");
      document.body.style.overflow = "hidden"; // Блокуємо прокрутку сторінки
    }
  
    // Функція закриття меню
    function closeMenu() {
      overlay.classList.add("visually-hidden");
      document.body.style.overflow = ""; // Відновлюємо прокрутку
    }
  
    // Обробники подій
    openMenuButton.addEventListener("click", openMenu);
    closeMenuButton.addEventListener("click", closeMenu);
  
    // Закриття при кліку поза меню
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        closeMenu();
      }
    });
  
    // Закриття при натисканні Esc
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !overlay.classList.contains("visually-hidden")) {
        closeMenu();
      }
    });
  });


