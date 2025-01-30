document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.burger-menu-button');
  const closeButton = document.querySelector('.close-button');
  const overlay = document.querySelector('.overlay');

  // Функція відкриття меню
  function openMenu() {
    overlay.classList.remove('visually-hidden');
    document.body.style.overflow = 'hidden'; // Блокуємо прокрутку сторінки
  }

  // Функція закриття меню
  function closeMenu() {
    overlay.classList.add('visually-hidden');
    document.body.style.overflow = ''; // Відновлюємо прокрутку
  }

  // Обробники подій
  burgerButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);

  // Закриття при кліку поза меню
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      closeMenu();
    }
  });

  // Закриття при натисканні Esc
  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'Escape' &&
      !overlay.classList.contains('visually-hidden')
    ) {
      closeMenu();
    }
  });
});

//   ______________________________________________________________

document.addEventListener('DOMContentLoaded', function () {
  const openMenuButton = document.querySelector('.reviews-button');
  const closeMenuButton = document.querySelector('.reviews-close-button');
  const overlay = document.querySelector('.reviews-overlay');

  // Функція відкриття меню
  function openMenu() {
    overlay.classList.remove('visually-hidden');
    document.body.style.overflow = 'hidden'; // Блокуємо прокрутку сторінки
  }

  // Функція закриття меню
  function closeMenu() {
    overlay.classList.add('visually-hidden');
    document.body.style.overflow = ''; // Відновлюємо прокрутку
  }

  // Обробники подій
  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);

  // Закриття при кліку поза меню
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      closeMenu();
    }
  });

  // Закриття при натисканні Esc
  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'Escape' &&
      !overlay.classList.contains('visually-hidden')
    ) {
      closeMenu();
    }
  });
});

//   ______________________________________________________________

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".arrow-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Запобігаємо закриттю через body click
      const item = button.closest(".ingredients-item");
      const description = item.querySelector(".description");
      const content = item.querySelector(".content-container");

      const isHidden = description.classList.contains("visually-hidden");

      // Закриваємо всі відкриті елементи перед відкриттям нового
      document.querySelectorAll(".description").forEach((desc) => {
        desc.classList.add("visually-hidden");
      });
      document.querySelectorAll(".content-container").forEach((cont) => {
        cont.classList.remove("visually-hidden");
      });

      // Перемикаємо поточний елемент
      if (isHidden) {
        description.classList.remove("visually-hidden");
        content.classList.add("visually-hidden");
      }
    });
  });

  // Закриття при кліку поза елементом
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".ingredients-item")) {
      document.querySelectorAll(".description").forEach((desc) => {
        desc.classList.add("visually-hidden");
      });
      document.querySelectorAll(".content-container").forEach((cont) => {
        cont.classList.remove("visually-hidden");
      });
    }
  });

  // Закриття при натисканні ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.querySelectorAll(".description").forEach((desc) => {
        desc.classList.add("visually-hidden");
      });
      document.querySelectorAll(".content-container").forEach((cont) => {
        cont.classList.remove("visually-hidden");
      });
    }
  });
});



