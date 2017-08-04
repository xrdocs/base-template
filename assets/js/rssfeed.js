var rssfeedTop = $('.rssfeed').offset().top;       // get initial position of the element

function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
}

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    mobilecheck = isMobileWidth()
    console.log(mobilecheck)

    if (mobilecheck != true) {
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

    } else {
        $('.rssfeed').css({                      // if you scroll above it
                position: 'relative',
                width: '100%'
        });
    }
});
