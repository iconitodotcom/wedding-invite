const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");

    if (music.paused) 
    {
        music.play();
        icon.classList.replace("bi-play-fill", "bi-pause-fill");
    } 
    else 
    {
        music.pause();
        icon.classList.replace("bi-pause-fill", "bi-play-fill");
    }
});
