$(document).ready(function () {
  //my-menu 버튼
  $('.my-menu-button').click(function () {
    $('.my-menu-content').fadeToggle(200)
    // $('.my-menu-content').addClass('on') 트랜지션 효과는 불가.
  })

  //sidebar
  $('.gnb .ic-menu').click(function () {
    $('.sidebar').addClass('is-active')
    $('.bg').addClass('is-active')
  })
  $('.bg').click(function () {
    $('.sidebar').removeClass('is-active')
    $('.bg').removeClass('is-active')
  })

  //sidebar 버튼
  $('.drawer-menu').click(function () {
    $(this).toggleClass('is-open is-active')
    $(this).siblings('.drawer-menu').removeClass('is-open is-active')
  })
})
