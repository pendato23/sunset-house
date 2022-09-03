const searchButton = document.querySelector(
  '.global-header .gnb-icon-button.is-search'
)
const searchModal = document.querySelector('.search-modal')
const searchModalCloseButton = searchModal.querySelector(
  '.search-modal-form .btn-ghost'
)
const searchOverlay = document.querySelector('.overlay')

function openSearchModal() {
  searchModal.classList.add('is-open')
  searchOverlay.classList.add('is-active')
}

searchButton.addEventListener('click', openSearchModal)

function closeSearchModal() {
  searchModal.classList.remove('is-open')
  searchOverlay.classList.remove('is-active')
}

searchModalCloseButton.addEventListener('click', closeSearchModal)
