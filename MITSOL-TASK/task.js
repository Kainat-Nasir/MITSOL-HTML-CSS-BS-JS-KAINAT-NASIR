
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'all 0.3s ease-in-out';
    });
  
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
document.querySelector('.back-to-top a').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
