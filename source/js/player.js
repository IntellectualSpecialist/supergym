const query = '?rel=0&showinfo=0&autoplay=1';
let iframe;
const playerElement = document.querySelector('.player');
let videoHref;
let videoPlaceholderElement;
let playerButtonElement;

if (playerElement) {
  videoHref = playerElement.dataset.src + query;
  videoPlaceholderElement = playerElement.querySelector('.player__placeholder');
  playerButtonElement = playerElement.querySelector('.player__button');
}

const createIframe = () => {
  iframe = document.createElement('iframe');

  iframe.classList.add('player__video');
  iframe.setAttribute('width', '320');
  iframe.setAttribute('height', '170');
  iframe.setAttribute('src', videoHref);
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('title', 'YouTube video player');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  iframe.setAttribute('allowfullscreen', '');
};

const onPlayerButtonClick = (evt) => {
  evt.preventDefault();
  createIframe();
  videoPlaceholderElement.remove();
  playerButtonElement.remove();
  playerElement.append(iframe);
};

const initPlayer = () => {
  if (playerElement) {
    playerButtonElement.addEventListener('click', onPlayerButtonClick);
  }
};

export { initPlayer };
