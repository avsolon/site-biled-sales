// Gallery
const thumbs = document.querySelectorAll('.gallery-thumb');
const mainImage = document.getElementById('mainImage');
thumbs.forEach(t => t.addEventListener('click', () => {
  thumbs.forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  mainImage.style.opacity = 0;
  setTimeout(() => {
    mainImage.src = t.dataset.img;
    mainImage.style.opacity = 1;
  }, 200);
}));
mainImage.style.transition = 'opacity .3s';

// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

// Modal
const modal = document.getElementById('orderModal');
document.querySelectorAll('[data-order]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.add('open');
  });
});
document.getElementById('closeModal').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });

document.getElementById('orderForm').addEventListener('submit', e => {
  e.preventDefault();
  const box = document.querySelector('.modal-box');
  box.innerHTML = '<h3 style="color:var(--accent)">Заявка принята ✓</h3><p style="margin-top:12px">Перезвоним в течение 10 минут. Спасибо за доверие!</p>';
  setTimeout(() => modal.classList.remove('open'), 2500);
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if(en.isIntersecting) en.target.classList.add('in'); });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Burger (simple toggle)
document.querySelector('.burger').addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '72px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.background = 'var(--bg-2)';
  nav.style.padding = '20px';
  nav.style.borderBottom = '1px solid var(--line)';
});