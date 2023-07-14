// Toggle class

const navbarNav = document.querySelector('.navlinks');

document.querySelector('#hm-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar side bar untuk keluar navbar

const hamburger = document.querySelector('#hm-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove('active');
});

function showLoading() {
  var btn = document.getElementById("loadingBtn");
  var loader = document.createElement("div");
  loader.className = "loader";
  btn.innerHTML = ""; // Menghapus teks pada tombol
  btn.appendChild(loader);
  loader.style.display = "inline-block";
  setTimeout(function() {
    loader.style.display = "none";
    btn.innerHTML = "Kirim";
  }, 3000); // Menunggu 3 detik sebelum mengembalikan tombol ke kondisi semula

   // Setelah pengiriman selesai, lakukan pembaruan halaman setelah penundaan tertentu
   setTimeout(function() {
    location.reload();
  }, 2000); // Mengatur waktu penundaan dalam milidetik sebelum memperbarui halaman (2 detik dalam contoh ini)
}

