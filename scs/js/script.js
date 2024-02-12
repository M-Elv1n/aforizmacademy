document.addEventListener("DOMContentLoaded", function () {
  var dropdownBtn = document.querySelector(".dropdown-btn");
  var dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });
});




document.addEventListener("DOMContentLoaded", function () {
  var dropdownBtn = document.querySelector(".dropdown-btn");

  dropdownBtn.addEventListener("click", function () {
    dropdownBtn.classList.toggle("active");
  });
});






var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}





window.addEventListener('scroll', function() {
  var items = document.querySelectorAll('.lessons__container--item');
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;

  // Показывать элементы, когда они появляются в области видимости
  items.forEach(function(item) {
    var rect = item.getBoundingClientRect();
    if (rect.top < windowHeight * 0.8) {
      item.classList.add('show-item');
    }
  });
});




// Получаем кнопку
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показываем кнопку, когда пользователь прокручивает вниз на 20px
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Прокручиваем страницу вверх при нажатии на кнопку
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});