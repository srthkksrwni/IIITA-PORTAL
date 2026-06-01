/* THRIVE @ IIITA — shared interactions */
document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  if (burger && menu) burger.addEventListener('click', () => menu.classList.toggle('open'));

  // FAQ accordions
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Animated counters
  const easeCount = (el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    let cur = 0; const dur = 1400; const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('en-IN');
      if (p < 1) requestAnimationFrame(tick);
      else el.innerHTML = target.toLocaleString('en-IN') + (suffix ? `<span class="plus">${suffix}</span>` : '');
    };
    requestAnimationFrame(tick);
  };
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { easeCount(e.target); cio.unobserve(e.target); } });
  }, { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

  // Simple form guard (demo only)
  document.querySelectorAll('form[data-demo]').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = f.querySelector('.form-note') || (() => {
        const n = document.createElement('p'); n.className = 'form-note'; n.style.cssText = 'margin-top:12px;color:var(--green-deep);font-weight:600;'; f.appendChild(n); return n;
      })();
      note.textContent = '✓ Thank you — your submission has been received. The office will respond within 2 working days.';
      f.reset();
    });
  });
});
