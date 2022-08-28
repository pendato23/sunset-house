$(document).ready(function () {
  //my-menu 버튼
  $('.my-menu-button').click(function () {
    $('.my-menu').toggleClass('is-active')
  })

  //sidebar 버튼
  $('.drawer-menu').click(function () {
    $(this).toggleClass('is-open')
    $(this).siblings('.drawer-menu').removeClass('is-open')
  })

  //search-modal
  $('.gnb-icon-button.lg-hidden').click(function () {
    $('.search-modal').addClass('is-open')
    $('.overlay').addClass('is-active')
  })
  $('.search-modal-header .btn-ghost').click(function () {
    $('.search-modal').removeClass('is-open')
    $('.overlay').removeClass('is-active')
  })

  //gnb-search
  $('.gnb-search .form-input').focus(function () {
    $('.gnb-search').find('.search-history').addClass('is-active')
  })
  $('.gnb-search .form-input').blur(function () {
    $('.gnb-search').find('.search-history').removeClass('is-active')
  })

  //lnb

  $('.lnb-item').click(function (e) {
    e.preventDefault() // a[href] 때문에 refresh되어 초기화되는 것을 막음.
    $(this).addClass('is-active')
    $(this).siblings('.lnb-item').removeClass('is-active')
  })

  //product-spec
  $('.product-spec .button-wrapper button').click(function () {
    $('.product-spec').addClass('is-open')
  })

  //product-inquiry(mobile)
  $('.product-inquiry .icon-button').click(function () {
    $('.product-inquiry').addClass('is-open')
  })

  //product-shipment
  $('.product-shipment .icon-button').click(function () {
    $('.product-shipment').addClass('is-open')
  })

  //order-cta
  $('.order-cta .btn-ghost').click(function () {
    $(this).toggleClass('is-active')
    $('.order-cta .btn-ghost i').toggleClass('ic-bookmark-filled')

    if ($(this).hasClass('is-active')) {
      $(this).find('span').text('18,303')
    } else {
      $(this).find('span').text('18,302')
    }
  })

  //order-form-modal
  $('.order-cta .btn-primary').click(function () {
    $('.order-form-modal').addClass('is-open')
    $('.overlay').addClass('is-active')
  })
  $('.overlay').click(function () {
    $('.order-form-modal').removeClass('is-open')
  })
})
