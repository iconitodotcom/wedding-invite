const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
const buttons = document.querySelectorAll("[data-music-toggle]");

const MUSIC_ITEM = "wddingMusicPlaying";

function setMusicState(isPlaying){
    localStorage.setItem(MUSIC_ITEM, String(isPlaying));
}

function updateButtonUI(button, isPlaying){
    const icon = button.querySelector("i");
    if(!icon) return;

    if(isPlaying)
    {
        icon.classList.remove("bi-play-fill");
        icon.classList.add("bi-pause-fill");
    } 
    else
    {
        icon.classList.remove("bi-pause-fill");
        icon.classList.add("bi-play-fill");
    }
}
buttons.forEach((button) => {
    const savedState = localStorage.getItem(MUSIC_ITEM) == "true";

    updateButtonUI(button, savedState);

    button.addEventListener("click", async (even) =>{
        // event.preventDefault();

        if(!music) return;
        if(music.paused){
            try{
                await music.play();
                setMusicState(true);
                updateButtonUI(button, true);
            } catch (err){
                console.log("Audio blocked until user interaction:", err);
            }
        } else {
            music.pause();
            setMusicState(false);
            updateButtonUI(button,false);
        }
    });
});
if (music && localStorage.getItem(MUSIC_ITEM) == "true"){
    music.play().catch(() => {
        console.log("Audio autoplay was blocked by the bowser.")
    });
}
