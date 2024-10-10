
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
