// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Menambahkan smooth scroll pada semua tautan dengan href yang diawali dengan #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah aksi default

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
