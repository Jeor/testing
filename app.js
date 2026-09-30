const wall = document.querySelector('#wall');
const covers = ['netflix', 'disney', 'hbo', 'prime', 'paramount', 'hulu', 'apple', 'peacock', 'crunchyroll', 'weekend'];
// Two identical sets per lane make the transform loop seamless.
for (let laneIndex = 0; laneIndex < 5; laneIndex++) {
  const lane = document.createElement('div');
  lane.className = 'lane';
  lane.style.setProperty('--duration', `${90 + laneIndex * 9}s`);
  const set = document.createElement('div');
  set.className = 'poster-set';
  for (let index = 0; index < 10; index++) {
    const image = document.createElement('img');
    image.className = 'poster';
    image.src = `./assets/${covers[(index + laneIndex * 3) % covers.length]}.webp`;
    image.alt = '';
    image.width = 640;
    image.height = 360;
    image.decoding = 'async';
    set.append(image);
  }
  lane.append(set, set.cloneNode(true));
  wall.append(lane);
}
const control = document.querySelector('.motion-control');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;
function updateMotion() {
  document.body.dataset.paused = String(paused);
  control.setAttribute('aria-pressed', String(paused));
  const label = paused ? 'Resume animation' : 'Pause animation';
  control.setAttribute('aria-label', label);
  control.title = label;
  if (paused) {
    wall.style.setProperty('--mx', '0px');
    wall.style.setProperty('--my', '0px');
  }
}
control.addEventListener('click', () => { paused = !paused; updateMotion(); });
reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; updateMotion(); });
updateMotion();
// CSS does the continuous work; pointer updates happen at most once per frame.
let frame = 0;
window.addEventListener('pointermove', event => {
  if (paused || reducedMotion.matches || event.pointerType !== 'mouse' || frame) return;
  frame = requestAnimationFrame(() => {
    wall.style.setProperty('--mx', `${(event.clientX / innerWidth - .5) * 28}px`);
    wall.style.setProperty('--my', `${(event.clientY / innerHeight - .5) * 20}px`);
    frame = 0;
  });
}, { passive: true });
document.addEventListener('visibilitychange', () => {
  document.body.dataset.hidden = String(document.hidden);
});
