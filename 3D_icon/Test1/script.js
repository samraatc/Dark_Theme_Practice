const iconContainer = document.querySelector('.icon-container');

iconContainer.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;

  iconContainer.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

iconContainer.addEventListener('mouseleave', () => {
  iconContainer.style.transform = 'rotateX(20deg) rotateY(10deg)';
});
