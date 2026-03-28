/*
wedding-ivite/invite/static/js/countdown.sj
issue  dev           date       description
na    Julio Conchas 01/02/2026 first creation
na    Julio Conchas 02/24/2026 Update using claude.ai
*/
const WEDDING_DATE = new Date(2026, 10, 14, 18, 0, 0); // June 14, 2026 at 4:00 PM

const daysEl    = document.getElementById('days');
const hoursEl   = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function pad(n) { return String(n).padStart(2, '0'); }

function tick(el, newVal) 
{
    if (el.textContent !== newVal) 
    {
        el.classList.remove('tick');
        void el.offsetWidth; // reflow to restart animation
        el.classList.add('tick');
        el.textContent = newVal;
        setTimeout(() => el.classList.remove('tick'), 400);
    }
}

function updateCountdown() 
{
    const now  = new Date();
    const diff = WEDDING_DATE - now;

    if (diff <= 0) 
    {
        document.getElementById('countdown').innerHTML =
        '<p class="finished" style="grid-column:1/-1">Today is the day! 🎉</p>';
        return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    tick(daysEl,    pad(d));
    tick(hoursEl,   pad(h));
    tick(minutesEl, pad(m));
    tick(secondsEl, pad(s));
}

updateCountdown();
setInterval(updateCountdown, 1000);