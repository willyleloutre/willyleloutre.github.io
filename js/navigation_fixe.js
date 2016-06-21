// BARRE DE NAVIGATION
$(window).scroll(function (event) {
    var y = $(this).scrollTop();

    if (y >= 50) {
      $('nav').addClass('fixed');
      $('.ss-titre').addClass('fixed');
      $('.nav1').addClass('fixed');
      }
    else {
      // sinon, on l'enlève
      $('nav').removeClass('fixed');
      $('.ss-titre').removeClass('fixed');
      $('.nav1').removeClass('fixed');

    }
  });

// Fixer la tete à un certain point
  $(window).scroll(function (event) {

      var y = $(this).scrollTop();

      if (y >= 330 &&  $(window).width() > 870 ) {
        $('.me').addClass('fixed');

      } else if
        (y >= 600 &&  $(window).width() < 870 ) {
          $('.me').addClass('fixed');
        }
        else {
        $('.me').removeClass('fixed');
      }
    });



// enlever les fleches et effet push sur txt-intro sur petit écran
    $(document).ready( function() {
       /* Check width on page load*/
       if ( $(window).width() < 870) {
        $('.txt-intro').addClass('grid-item-last');
       }
       else {}
    });

    $(window).resize(function() {
       /*If browser resized, check width again */
       if ($(window).width() < 870) {
        $('.txt-intro').addClass('grid-item-last');
       }
       else {$('.txt-intro').removeClass('grid-item-last');}
    });


// Elargir l'intro sur Smartphone
        $(document).ready( function() {
           /* Check width on page load*/
           if ( $(window).width() < 640) {
            $('.txt-intro').removeClass('grid-item-last');
            $('.intro').removeClass('grid-small-2');
           }
           else {}
        });

        $(window).resize(function() {
           /*If browser resized, check width again */
           if ($(window).width() < 640) {
            $('.txt-intro').removeClass('grid-item-last');
            $('.intro').removeClass('grid-small-2');
           }
           else {$('.txt-intro').addClass('grid-item-last');
                 $('.intro').addClass('grid-small-2');
         }
        });



// enlever l'effet scrollme sur petit écran et lorsque l'écran est resized
        $(document).ready( function() {
           /* Check width on page load*/
           if ( $(window).width() < 870) {
            $('.page2').removeClass('scrollme');
            $('.formulaire').removeClass('scrollme');
           }
           else {}
        });

        $(window).resize(function() {
           /*If browser resized, check width again */
           if ($(window).width() < 870) {
          $('.page2').removeClass('scrollme');
          $('.formulaire').removeClass('scrollme');
           }
           else {$('.page2').addClass('scrollme');
                 $('.formulaire').addClass('scrollme');
                }
        });
