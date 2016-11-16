$(document).ready(function() {
  $('.toolbar').click(function() {
    $(this).addClass('open');
  });
  $('.wrapper').click(function() {
    $('.toolbar').removeClass('open');
  });

  $('input, select').change(function() {
    var newValue= $(this).val();

    if($(this).attr('name') == 'url') {
      $('iframe').attr('src', newValue);
      $('iframe').removeClass('loaded');
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

    /* Colors */
    if($(this).attr('name') == 'color-mode') {
      if($(this).val() == 'simple') {
        $('.color-simple').show();
        $('.color-complex').hide();
      }
      else {
        $('.color-simple').hide();
        $('.color-complex').show();
      }
    }

    if($(this).attr('name') == 'colorSimple') {
      var color = chroma(newValue);
      var spin = color.get('hsl.h');
      var spinColor = color.luminance() > 0.5 ? color.darken(1).saturate(3).set('hsl.h', spin + 180) : color.brighten(1).saturate(3).set('hsl.h', spin + 180);
      var titleColor = color.luminance() > 0.5 ? color.darken(1.2).saturate(3.2).alpha(0.5).css() : color.brighten(1.1).saturate(1.2).alpha(0.5).css();
      var shadowColor = color.luminance() > 0.5 ? color.darken(1.1).saturate(2.8).alpha(0.3).css() : color.darken(1.4).saturate(0.8).alpha(0.3).css();
      var shadowValue = '-3vw 10vh 80px 20px ' + shadowColor;
      $('.wrapper').css('background-color', newValue);
      $('h1').css('color', titleColor);
      $('.iframe-inner').css('box-shadow', shadowValue);
      $('body').css('background-color', spinColor);
    }

    if($(this).attr('name') == 'bgColor') {
      $('.wrapper').css('background-color', newValue);
    }
    if($(this).attr('name') == 'textColor') {
      $('h1').css('color', newValue);
    }
    if($(this).attr('name') == 'shadowColor') {
      var shadowValue = '-3vw 10vh 80px 20px ' + newValue;
      $('.iframe-inner').css('box-shadow', shadowValue);
    }
    if($(this).attr('name') == 'frameColor') {
      $('body').css('background-color', newValue);
    }
  });

  $('.settings--rotation input').change(function() {
    var xValue= $('input[name="rotateX"]').val();
    var yValue= $('input[name="rotateY"]').val();
    var zValue= $('input[name="rotateZ"]').val();
    var rotation = 'rotateX('+xValue+'deg) rotateY('+ yValue+'deg) rotateZ('+zValue+'deg)';

    console.log(rotation);

    $('.iframe-inner').css('transform', rotation);
  });

  $('.scale-button').click(function() {
    $('.wrapper').toggleClass('limit');
    $(this).toggleClass('active');
  });

  $('iframe').on('load', function() {
    $(this).addClass('loaded');
    console.log('loaded');
  });
});
