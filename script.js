// ============================================================
// Skrip portofolio: menu di HP, tahun otomatis, gambar cadangan
// ============================================================

// 1. Menu di layar kecil
const tombolMenu = document.getElementById("tombolMenu");
const menu = document.getElementById("menu");

tombolMenu.addEventListener("click", function () {
  const terbuka = menu.classList.toggle("terbuka");
  tombolMenu.setAttribute("aria-expanded", String(terbuka));
});

// Tutup menu setelah salah satu tautan diklik
menu.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    menu.classList.remove("terbuka");
    tombolMenu.setAttribute("aria-expanded", "false");
  });
});

// 2. Tahun di bagian bawah halaman
document.getElementById("tahun").textContent = new Date().getFullYear();

// 3. Kalau gambar proyek belum ada, sembunyikan gambar rusak
//    sehingga tulisan "Tangkapan layar belum ditambahkan" yang tampil
document.querySelectorAll(".gambar img").forEach(function (img) {
  img.addEventListener("error", function () {
    img.style.display = "none";
  });
});