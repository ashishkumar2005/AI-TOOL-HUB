document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const themeToggle = document.getElementById("themeToggle");
  const toggleIntentBtn = document.getElementById("toggleIntentBtn");
  const intentSection = document.getElementById("intentSection");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  });

  if (toggleIntentBtn && intentSection) {
    toggleIntentBtn.addEventListener("click", () => {
      intentSection.classList.toggle("hidden");
    });
  }

  let searchTimeout;

  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      const query = searchInput.value.toLowerCase().trim();

      cards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        card.classList.toggle("hidden", !cardText.includes(query));
      });
    }, 150);
  });


  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      // Update active button UI
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.dataset.filter;

      cards.forEach(card => {
        const cardCategory = card.dataset.category;

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  searchInput.addEventListener("search", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    document.querySelector('[data-filter="all"]').classList.add("active");

    cards.forEach(card => card.classList.remove("hidden"));
  });

});
