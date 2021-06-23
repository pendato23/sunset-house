$(document).ready(function () {
  //my-menu 버튼
  $('.my-menu-button').click(function () {
    $('.my-menu').toggleClass('is-active')
  })

  //sidebar
  $('.gnb .ic-menu').click(function () {
    $('.sidebar').addClass('is-active')
    $('.overlay').addClass('is-active')
  })
  $('.overlay').click(function () {
    $('.sidebar').removeClass('is-active')
    $('.overlay').removeClass('is-active')
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
})
