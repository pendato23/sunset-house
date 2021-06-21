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
  $('.drawer-menu-button').click(function () {
    $(this).next('.drawer-menu-content').slideToggle(200)
    $(this).find('.ic-chevron').toggleClass('is-active')
    $(this)
      .next('.drawer-menu-content')
      .siblings('.drawer-menu-content')
      .slideUp()
    $(this)
      .siblings('.drawer-menu-button')
      .find('.ic-chevron')
      .removeClass('is-active')
  })
})
