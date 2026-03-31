// 3 — watch for element entering viewport, then trigger
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('reveal-line')) { entry.target.classList.add('visible') }
        if (entry.target.classList.contains('typewriter')) { entry.target.classList.add('animate') }
        //entry.target.classList.add('animate');
        observer.unobserve(entry.target);  // only animate once
      }
    });
  }, { threshold: 1 });  // trigger when 30% visible
  
  document.querySelectorAll('.typewriter').forEach(el => observer.observe(el));
  document.querySelectorAll('.reveal-line').forEach((el, i ) => {
    // stagger each line
   // el.querySelector('span').style.transitionDelay = `${i * 0.3}s`;
    observer.observe(el);
  });