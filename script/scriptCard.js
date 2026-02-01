let currentSlideIndex = 0; // Индекс текущего слайда

function changeSlide(direction) {
  const activeContainer = document.querySelector(
    '.image-slider:not([style*="display: none"])'
  );
  const slides = activeContainer.querySelectorAll(".image-container"); // Запись всех слайдов

  slides[currentSlideIndex].classList.remove("active"); // Скрываем текущий слайд
  currentSlideIndex =
    (currentSlideIndex + direction + slides.length) % slides.length; // Вычисляем новый индекс
  slides[currentSlideIndex].classList.add("active"); // Отображаем новый слайд
}

function toggleContainers(containerNumber) {
  const containers = [
    document.getElementById("container1"),
    document.getElementById("container2"),
    document.getElementById("container3"),
    document.getElementById("container4"),
    document.getElementById("container5"),
    document.getElementById("container6"),
  ];

  // Скрываем все контейнеры
  containers.forEach((container, index) => {
    container.style.display = index === containerNumber - 1 ? "block" : "none"; // Показываем только нужный контейнер
    if (index === containerNumber - 1) {
      currentSlideIndex = 0; // Сбрасываем индекс при активации нового контейнера
      changeSlide(0); // Показать первый слайд этого контейнера
    }
  });
}

// Получаем элементы
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close-button")[0];

// Функция для открытия модального окна
btn.onclick = function () {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Запретить прокрутку на фоне
};

// Функция для закрытия модального окна при нажатии на элемент <span> (×)
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = ""; // Разрешить прокрутку на фоне
};

// Закрыть модальное окно при нажатии вне его области
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Разрешить прокрутку на фоне
  }
};

// Закрытие модального окна через кнопку
document.getElementById("closeModal").onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = ""; // Разрешить прокрутку на фоне
};

function showOptions() {
  const deliveryMethod = document.getElementById("delivery").value;
  const pickupOptions = document.getElementById("pickupOptions");
  const novaPoshtaOptions = document.getElementById("novaPoshtaOptions");
  const novaPoshtaAdressOptions = document.getElementById(
    "novaPoshtaAdressOptions"
  );
  const countryPostOptions = document.getElementById("countryPostOptions");

  pickupOptions.style.display =
    deliveryMethod === "Самовывоз" ? "block" : "none";
  novaPoshtaOptions.style.display =
    deliveryMethod === "Доставка на отделение Новой Почты" ? "block" : "none";
  novaPoshtaAdressOptions.style.display =
    deliveryMethod === "Адресная доставка Новой Почты" ? "block" : "none";
  countryPostOptions.style.display =
    deliveryMethod === "Доставка за границу" ? "block" : "none";
}
