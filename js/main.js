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
})
