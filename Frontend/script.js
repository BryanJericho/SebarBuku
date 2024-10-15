// UNTUK TOGGLE FOOTER MOBILE
function toggleInfo(element) {
  const info = element.parentElement.nextElementSibling; // Dapatkan elemen berikutnya (informasi lebih lanjut)
  const arrowIcon = element.querySelector(".arrowIcon"); // Dapatkan ikon panah

  // Toggle informasi (show/hide)
  info.classList.toggle("max-h-0"); // Kontrol ketinggian (0)
  info.classList.toggle("max-h-[500px]"); // Sesuaikan tinggi maksimum (contoh 500px)
  info.classList.toggle("opacity-0"); // Buat elemen transparan
  info.classList.toggle("opacity-100"); // Buat elemen terlihat

  // Rotate arrow icon 180 degrees if visible, otherwise reset
  arrowIcon.classList.toggle("rotate-180");
}

// UNTUK CARROUSEL APA YANG MEREKA KATAKAN

const carousel = document.getElementById("carousel");

// Menambahkan event listener untuk keyboard arrow keys (kiri dan kanan)
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  } else if (e.key === "ArrowLeft") {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
  }
});

// Menambahkan swipe gesture untuk perangkat mobile
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; // Kecepatan scroll
  carousel.scrollLeft = scrollLeft - walk;
});

//UNTUK HAMBURGER MENU
// const hamburger = document.getElementById("hamburger");
// const mobileMenu = document.getElementById("mobile-menu");

// hamburger.addEventListener("click", () => {
//   // Toggle 'active' class untuk hamburger menu
//   hamburger.classList.toggle("active");

//   // Toggle 'active' class untuk mobile menu
//   mobileMenu.classList.toggle("active");

//   // Toggle visibility of the mobile menu
//   if (mobileMenu.classList.contains("active")) {
//     mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
//   } else {
//     mobileMenu.style.maxHeight = "0";
//   }

// });

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarCta = document.getElementById("navbar-cta");

  menuToggle.addEventListener("click", function () {
    // Toggles the visibility of the menu
    navbarCta.classList.toggle("hidden");
    navbarCta.classList.toggle("flex");
  });
});
