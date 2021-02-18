$(document).ready(function () {
  //TOGGLE FUNCTIONALITY
  $('.bar-icon').click(function () {
    $('.nav-ul').toggleClass('show');
  });
  //CLOSE MENU WHEN CLICKED
  $('.nav-ul a').click(function () {
    $('.nav-ul').removeClass('show');
  });

  $('form').submit(function (e) {
    e.preventDefault();
  });
  //ADDITIONAL CLASS REMOVAL
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      $('.nav-ul').removeClass('show');
    }
  });
});
