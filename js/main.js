// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// FAQ acordeão
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    item.classList.toggle('open');
    btn.setAttribute('aria-expanded', !isOpen);
  });
});

// Ano dinâmico no rodapé
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Carrossel de avaliações
const track = document.getElementById('reviewsTrack');
if (track) {
  const prev = document.getElementById('revPrev');
  const next = document.getElementById('revNext');
  const scrollAmt = () => track.querySelector('.review')?.offsetWidth + 22 || 320;
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -scrollAmt(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: scrollAmt(), behavior: 'smooth' }));
}
