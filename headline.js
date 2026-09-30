// Current features from https://dev.betterer.cc/changelog/ (2.0 and 2.1).
const headlinePairs = [
  ['collection', 'covers'],
  ['poster', 'layouts'],
  ['custom', 'artwork'],
  ['service', 'logos'],
  ['color', 'palettes'],
  ['PNG', 'downloads'],
];
const flipLine = document.querySelector('.flip-line');
const headlineMotion = matchMedia('(prefers-reduced-motion: reduce)');
let pairIndex = 0;
let rotationTimer;
let transitionTimer;
const pairElements = headlinePairs.map((words, index) => {
  const pair = document.createElement('span');
  pair.className = 'word-pair';
  pair.dataset.active = String(index === 0);
  words.forEach((word, wordIndex) => {
    const part = document.createElement('span');
    part.className = 'flip-word';
    part.textContent = word + (wordIndex === 1 ? '.' : '');
    pair.append(part);
    if (wordIndex === 0) pair.append(document.createTextNode(' '));
  });
  return pair;
});
flipLine.replaceChildren(...pairElements);

function canRotate() {
  return !document.hidden && !headlineMotion.matches && document.body.dataset.paused !== 'true';
}
function scheduleRotation() {
  clearTimeout(rotationTimer);
  if (canRotate()) rotationTimer = setTimeout(rotateHeadline, 4000);
}
function rotateHeadline() {
  if (!canRotate()) return;
  const outgoing = pairElements[pairIndex];
  pairIndex = (pairIndex + 1) % pairElements.length;
  const incoming = pairElements[pairIndex];
  outgoing.dataset.active = 'false';
  outgoing.classList.add('leaving');
  incoming.dataset.active = 'true';
  incoming.classList.add('entering');
  transitionTimer = setTimeout(() => {
    outgoing.classList.remove('leaving');
    incoming.classList.remove('entering');
    scheduleRotation();
  }, 700);
}
function syncHeadlineMotion() {
  clearTimeout(rotationTimer);
  clearTimeout(transitionTimer);
  if (headlineMotion.matches) pairIndex = 0;
  pairElements.forEach((pair, index) => {
    pair.classList.remove('entering', 'leaving');
    pair.dataset.active = String(index === pairIndex);
  });
  scheduleRotation();
}
document.querySelector('.motion-control').addEventListener('click', syncHeadlineMotion);
document.addEventListener('visibilitychange', syncHeadlineMotion);
headlineMotion.addEventListener('change', syncHeadlineMotion);
scheduleRotation();
