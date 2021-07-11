/* WATCH IN CHROME ! */

const elements = document.querySelectorAll('.c-mm');
elements.forEach(element => {
  const details = element.querySelector('.c-mm details');
  const audio = element.querySelector('.c-mm audio');
  if (details && audio) {
    details.addEventListener('toggle', () => { details.open ? audio.play() : audio.pause(); })
  }
})