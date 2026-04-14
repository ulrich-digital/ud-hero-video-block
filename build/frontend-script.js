/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/js/frontend.js ***!
  \****************************/
function toggleHeroVideoOnMobile() {
  const blocks = document.querySelectorAll('.wp-block-ud-hero-video-block');
  blocks.forEach(block => {
    const video = block.querySelector('.ud-hero-video-block__video');
    if (!video) {
      return;
    }
    const showVideoOnMobile = block.dataset.showVideoOnMobile === 'true';
    if (window.innerWidth <= 767 && !showVideoOnMobile) {
      video.setAttribute('hidden', 'hidden');
      video.pause();
      return;
    }
    video.removeAttribute('hidden');
    if (video.paused) {
      video.play().catch(() => {});
    }
  });
}
window.addEventListener('load', toggleHeroVideoOnMobile);
window.addEventListener('resize', toggleHeroVideoOnMobile);
/******/ })()
;
//# sourceMappingURL=frontend-script.js.map