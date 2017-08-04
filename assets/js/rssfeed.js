var rssfeedTop = $('.rssfeed').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= rssfeedTop) {           // apply position: fixed if you
        $('.rssfeed').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '30px',
            right: '0',
            width: '25%'
        });
    } else {                                   // apply position: static
        $('.rssfeed').css({                      // if you scroll above it
            position: 'relative',
            width: '100%'
        });
    }

});
