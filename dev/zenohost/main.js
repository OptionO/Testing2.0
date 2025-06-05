document.addEventListener("DOMContentLoaded", () => {
  // ACCORDION CONTROLLER
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const arrow = header.querySelector('.arrow');
    header.addEventListener('click', function () {
      const content = item.querySelector('.accordion-content');
      content.classList.toggle('hidden');
      if (!content.classList.contains('hidden')) {
        arrow.style.transform = 'rotate(180deg)';
      } else {
        arrow.style.transform = 'rotate(0deg)';
      }
    });
  });

  // ============================
  // THEME TOGGLE
  // ============================
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  const setIcon = () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    icon.textContent = isLight ? "light_mode" : "dark_mode";
  };

  const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    setIcon();
  };

  toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    setIcon();
  });

  loadTheme();

  // ============================
  // DROPDOWN MENU
  // ============================
  const menuButton = document.getElementById("menu-button");
  const dropdownMenu = document.querySelector('[role="menu"]');
  const defaultState = document.getElementById("defaultState");
  const closeState = document.getElementById("closeState");

  dropdownMenu.classList.add("hidden");

  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.remove("hidden", "opacity-0", "scale-95");
      dropdownMenu.classList.add("transition", "ease-out", "duration-100", "opacity-100", "scale-100");

      defaultState.classList.remove("opacity-100");
      defaultState.classList.add("opacity-0");
      closeState.classList.remove("opacity-0");
      closeState.classList.add("opacity-100");
    } else {
      dropdownMenu.classList.remove("ease-out", "duration-100", "opacity-100", "scale-100");
      dropdownMenu.classList.add("transition", "ease-in", "duration-75", "opacity-0", "scale-95");
      setTimeout(() => {
        dropdownMenu.classList.add("hidden");
      }, 75);

      defaultState.classList.remove("opacity-0");
      defaultState.classList.add("opacity-100");
      closeState.classList.remove("opacity-100");
      closeState.classList.add("opacity-0");
    }
  });

  document.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      if (!dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.remove("ease-out", "duration-100", "opacity-100", "scale-100");
        dropdownMenu.classList.add("transition", "ease-in", "duration-75", "opacity-0", "scale-95");
        setTimeout(() => {
          dropdownMenu.classList.add("hidden");
        }, 75);

        defaultState.classList.remove("opacity-0");
        defaultState.classList.add("opacity-100");
        closeState.classList.remove("opacity-100");
        closeState.classList.add("opacity-0");
      }
    }
  });

  // ============================
  // SMOOTH SCROLL
  // ============================
  new SmoothScroll('a[href*="#"]', { speed: 600 });

  // ============================
  // STACKED CARDS (Left/Right Arrows)
  // ============================
  const cards = document.querySelectorAll('.card');
  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');

  let centerIndex = 0;

  const positions = [
    { offset: '-30vw', scale: 0.8, zIndex: 1, opacity: 0.5 },
    { offset: '-15vw', scale: 0.9, zIndex: 2, opacity: 0.7 },
    { offset: '0vw', scale: 1.0, zIndex: 3, opacity: 1.0 },
    { offset: '15vw', scale: 0.9, zIndex: 2, opacity: 0.7 },
    { offset: '30vw', scale: 0.8, zIndex: 1, opacity: 0.5 },
  ];

  function updatePositions() {
    cards.forEach((card, i) => {
      let rel = i - centerIndex;
      if (rel < -2) rel += 5;
      if (rel > 2) rel -= 5;

      const pos = positions[rel + 2];
      card.style.transform = `translate(calc(-50% + ${pos.offset}), -50%) scale(${pos.scale})`;
      card.style.zIndex = pos.zIndex;
      card.style.opacity = pos.opacity;
    });
  }

  updatePositions();

  function prevCard() {
    centerIndex--;
    if (centerIndex < 0) centerIndex = cards.length - 1;
    updatePositions();
  }

  function nextCard() {
    centerIndex++;
    if (centerIndex >= cards.length) centerIndex = 0;
    updatePositions();
  }

  arrowLeft.addEventListener('click', prevCard);
  arrowRight.addEventListener('click', nextCard);
});

