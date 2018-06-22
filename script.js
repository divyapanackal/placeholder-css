$(document).ready(function () {
  $('.form input').blur(function () {
    if ($(this).val().length != 0) {
      $(this).parent().find('label').addClass('warning');
    } else {
      $(this).parent().find('label').removeClass('warning');
    }
  });
});
