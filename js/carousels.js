const commonOptions = {
  asNavThumbnails: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
}

const productCarousel = tns({
  ...commonOptions,
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  autoplay: true,
  autoplayHoverPauser: true,
  autoplayButtonOutput: false,
})

const userGalleryMobile = tns({
  ...commonOptions,
  container: '.user-gallery.is-mobile .slider-list',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  controls: false,
  gutter: 4,
  edgePadding: 16,
  loop: false,
})

const userGalleryDesktop = tns({
  ...commonOptions,
  container: '.user-gallery.is-desktop .slider-list',
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  asNavThumbnails: true,
  gutter: 6,
  edgePadding: 81,
  loop: false,
})
