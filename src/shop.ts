const filterButtons = document.querySelectorAll(".category-filter");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    cards.forEach((card) => {
      if (
        category === "All" ||
        card.getAttribute("data-category") === category
      ) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
