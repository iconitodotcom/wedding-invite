const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.innerText = "⏸";
  } else {
    music.pause();
    btn.innerText = "▶";
  }
});
