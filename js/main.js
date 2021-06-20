$(document).ready(function () {
  //my-menu 버튼
  $('.my-menu-button').click(function () {
    $('.my-menu-content').fadeToggle(200)
    // $('.my-menu-content').addClass('on') 트랜지션 효과는 불가.
  })
})
