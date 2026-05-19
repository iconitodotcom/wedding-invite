// 3 — watch for element entering viewport, then trigger
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.matches('.reveal-line, .reveal-left, .reveal-right')) { entry.target.classList.add('visible') }
        if (entry.target.classList.contains('typewriter')) { entry.target.classList.add('animate') }
        if (entry.target.classList.contains('curtain-wrapper')) { entry.target.classList.add('revealed') }
        if (entry.target.classList.contains('fade-in')) { entry.target.classList.add('show') }
        if (entry.target.classList.contains('fancy-image')) { entry.target.classList.add('fshow') }
        if (entry.target.classList.contains('tl-item')) { entry.target.classList.add('visible-item')}
        //entry.target.classList.add('animate');
        observer.unobserve(entry.target);  // only animate once
      }
    });
  }, { threshold: 0.3 });  // trigger when 30% visible
  
  document.querySelectorAll('.typewriter, .reveal-line, .reveal-right, .reveal-left, .curtain-wrapper, .fade-in, .fancy-image, .tl-item').forEach(el => observer.observe(el));