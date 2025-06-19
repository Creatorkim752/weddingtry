// Ambil nama dari parameter URL ?to=
function getNamaTamu() {
  const params = new URLSearchParams(window.location.search);
  const nama = params.get("to");
  return nama ? decodeURIComponent(nama) : "Tamu Undangan";
}

// Tampilkan nama tamu
document.getElementById("namaTamu").textContent = getNamaTamu();

// Tambahkan fungsi tombol
document.getElementById("openBtn").addEventListener("click", () => {
  window.location.href = "undangan.html" + window.location.search;
});
