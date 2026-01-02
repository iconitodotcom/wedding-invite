/*
wedding-ivite/invite/static/js/countdown.sj
issue  dev           date       description
na    Julio Conchas 01/02/2026 first creation
*/
const weddingDate = new Date("2026-11-14T18:00:00").getTime();

const countdown = setInterval(() => {
const now = new Date().getTime();
const distance = weddingDate - now;

if (distance < 0) {
  clearInterval(countdown);
  return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor(
  (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const minutes = Math.floor(
  (distance % (1000 * 60 * 60)) / (1000 * 60)
);
const seconds = Math.floor(
  (distance % (1000 * 60)) / 1000
);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}, 1000);
