// document.addEventListener('DOMContentLoaded', function() {
//     const dropdownToggle = document.getElementById('dropdown-mobile-toggle');
//     const dropdownMenu = document.querySelector('.dropdown-mobile__menu');
  
//     dropdownToggle.addEventListener('change', function() {
//       if (this.checked) {
//         dropdownMenu.style.display = 'block';
//       } else {
//         dropdownMenu.style.display = 'none';
//       }
//     });
  
//     // Закрытие меню при клике за его пределами
//     document.addEventListener('click', function(event) {
//       if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
//         dropdownMenu.style.display = 'none';
//         dropdownToggle.checked = false;
//       }
//     });
//   });
  

// document.addEventListener('DOMContentLoaded', function() {
//     const dropdownToggle = document.getElementById('dropdown-mobile-toggle');
//     const dropdownMenu = document.querySelector('.dropdown-mobile__menu');
  
//     dropdownToggle.addEventListener('click', function() {
//       if (dropdownMenu.style.display === 'block') {
//         dropdownMenu.style.display = 'none';
//       } else {
//         dropdownMenu.style.display = 'block';
//       }
//     });
  
//     // Закрытие меню при клике за его пределами
//     document.addEventListener('click', function(event) {
//       if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
//         dropdownMenu.style.display = 'none';
//       }
//     });
//   });
  



document.addEventListener("DOMContentLoaded", function () {
    var dropdownBtn = document.querySelector(".dropdownm-btn");
    var dropdownContent = document.querySelector(".dropdownm-content");
  
    dropdownBtn.addEventListener("click", function () {
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
  });
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    var dropdownBtn = document.querySelector(".dropdownm-btn");
  
    dropdownBtn.addEventListener("click", function () {
      dropdownBtn.classList.toggle("active");
    });
  });