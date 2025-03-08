const parentEl = document.querySelector('#parent');
const childEl = document.querySelector('#child');
const descendantEl = document.querySelector('#descendant');

parentEl.addEventListener('click', () => {
  console.log('Parent click handler');
});

childEl.addEventListener('click', () => {
  console.log('Child click handler');
});

descendantEl.addEventListener('click', () => {
  console.log('Descendant click handler');
});
