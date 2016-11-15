$(document).ready(function() {
  $('input, select').change(function() {
    var newValue= $(this).val();

    if($(this).attr('name') == 'url') {
      $('iframe').attr('src', newValue);
    }
    if($(this).attr('name') == 'title') {
      $('h1').text(newValue);
    }

    if($(this).attr('name') == 'width') {
      $('.iframe').css('width', newValue + '%');
    }
    if($(this).attr('name') == 'height') {
      $('.iframe').css('height', newValue + '%');
    }
    if($(this).attr('name') == 'right') {
      $('.iframe').css('right', newValue + '%');
    }
    if($(this).attr('name') == 'top') {
      $('.iframe').css('top', newValue + '%');
    }
    if($(this).attr('name') == 'color') {
      $('body').removeClass();
      $('body').addClass(newValue);
    }
  });

  $('.scale-button').click(function() {
    $('.wrapper').toggleClass('limit');
    $(this).toggleClass('active');
  });
});
