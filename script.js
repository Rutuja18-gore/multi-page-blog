const menuButtons = document.querySelectorAll(".menu-btn");

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nav = button.closest(".header-inner")?.querySelector(".nav-links");
    if (nav) nav.classList.toggle("open");
  });
});

const categoryButtons = document.querySelectorAll(".chip-btn");
const blogItems = document.querySelectorAll(".post-list .list-item");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    categoryButtons.forEach((chip) => chip.classList.remove("active"));
    button.classList.add("active");

    blogItems.forEach((item) => {
      const categories = item.dataset.category?.split(" ") || [];
      const shouldShow = filter === "all" || categories.includes(filter);
      item.style.display = shouldShow ? "grid" : "none";
    });
  });
});
