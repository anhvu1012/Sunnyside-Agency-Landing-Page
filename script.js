const naviMobileToggleBtn = document.getElementById('navi-mobile-toggle-btn');
const naviMobileWrapper = document.getElementById('navi-mobile-wrapper');

naviMobileToggleBtn.addEventListener('click', () => {
  naviMobileWrapper.classList.toggle('hidden');
});