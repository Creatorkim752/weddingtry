// Countdown
const targetDate = new Date("2025-06-22T09:00:00").getTime();
const countdownBox = document.getElementById("countdownBox");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownBox.innerHTML = `
    <div>${days}<br><small>Hari</small></div>
    <div>${hours}<br><small>Jam</small></div>
    <div>${minutes}<br><small>Menit</small></div>
    <div>${seconds}<br><small>Detik</small></div>
  `;
}, 1000);
