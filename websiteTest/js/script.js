const changeColorBtn = document.getElementById('changeColorBtn');
const message = document.getElementById('message');

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F2F233', '#FF33F7'];

changeColorBtn.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;

  message.textContent = `La couleur du fond est maintenant ${randomColor}.`;
});
