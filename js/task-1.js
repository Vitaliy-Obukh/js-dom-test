// =======  Завдання-1 ========

const textEl = document.querySelector('#text');
const buttonEl = document.querySelector('#changeText');

// buttonEl.addEventListener('click', function () {
//   textEl.textContent = 'Текст змінено!';
// });

buttonEl.addEventListener('click', function () {
  if (textEl.textContent === 'Текст змінено!') {
    textEl.textContent = 'Цей текст потрібно змінити';
  } else {
    textEl.textContent = 'Текст змінено!';
  }
});

// ======== Завдання-2 ========

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.querySelector('#changeBg').addEventListener('click', function () {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
});
