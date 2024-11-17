const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')

galleryImageModal.showModal()
galleryImageModal.addEventListener('click', () => {
  galleryImageModal.close()
})
