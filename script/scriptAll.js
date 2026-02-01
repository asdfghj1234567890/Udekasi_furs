document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");
  const applyFiltersButton = document.getElementById("applyFilters");
  const resetFiltersButton = document.getElementById("resetFilters");
  const searchInput = document.getElementById("searchInput");

  // Обработка ввода в поле поиска
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    productCards.forEach((card) => {
      const productName = card.querySelector("h2").textContent.toLowerCase();
      const productNumber = card.getAttribute("data-number"); // Предположим, что номер товара хранится здесь

      if (
        productName.includes(searchTerm) ||
        (productNumber && productNumber.includes(searchTerm))
      ) {
        card.style.display = "flex"; // Показываем карточку
      } else {
        card.style.display = "none"; // Скрываем карточку
      }
    });
  });

  applyFiltersButton.addEventListener("click", () => {
    const selectedGenders = Array.from(
      document.querySelectorAll(
        'input[type=checkbox][value="male"]:checked, input[type=checkbox][value="female"]:checked',
      ),
    ).map((el) => el.value);

    const selectedAvailability = Array.from(
      document.querySelectorAll(
        'input[type=checkbox][value="in_stock"]:checked, input[type=checkbox][value="preorder"]:checked',
      ),
    ).map((el) => el.value);

    productCards.forEach((card) => {
      const genderMatch =
        selectedGenders.length === 0 ||
        selectedGenders.includes(card.dataset.gender);
      const availabilityMatch =
        selectedAvailability.length === 0 ||
        selectedAvailability.includes(card.dataset.availability);

      if (genderMatch && availabilityMatch) {
        card.style.display = "flex"; // Показываем карточку
      } else {
        card.style.display = "none"; // Скрываем карточку
      }
    });

    // Закрытие модального окна
    const filterModal = bootstrap.Modal.getInstance(
      document.getElementById("filterModal"),
    );
    filterModal.hide();
  });

  resetFiltersButton.addEventListener("click", () => {
    document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
      checkbox.checked = false; // Сбрасываем все галочки
    });

    // Показываем все карточки
    productCards.forEach((card) => {
      card.style.display = "flex";
    });
  });
});

document.getElementById("pageSelector").addEventListener("change", function () {
  window.location.href = this.value;
});
