$(document).ready(function() {
  $('nav li a').on('click', function() {
    const targetSection = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetSection).offset().top - 100
    }, 1000);
  });

  $('input[name="fontType"]').change(function() {
    const selectedFont = $(this).val();
    $('body').css('font-family', selectedFont);
  });

  $('#fontColor').change(function() {
    const selectedColor = $(this).val();
    $('body').css('color', selectedColor);
  });
  
  $("#sldr").animate({
    left: "150px"
  }, 2000);
  
});

  