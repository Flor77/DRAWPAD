const colors = ['#E74C3C', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#6104a0', '#360ccc', '#c32d2d', '#d5f758', '#2b0dca', '#e27ec2', '#b35ef7'];

const container = document.querySelector('#board');
const SQUARE_NUMBER =  500;

for(let i = 0; i < SQUARE_NUMBER; i++){
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  container.append(square);
}

function setColor(element) {
  element.style.backgroundColor = getRandomColor();
}

function removeColor(element) {
  element.style.backgroundColor = '#1e1e1e';
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}


