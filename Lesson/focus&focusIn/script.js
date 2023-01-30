//JQUERY

$(document).ready(function () {



    $('.parent')
    .focusin(function () {
        log('div focusin');
    }).focusout(function () {
        log('div focusout');
    }).focus(function () {
        log('div focus');
    }).blur(function () {
        log('div blur');
    });


    $('input')
        .focusin(function () {
            log('input focusin');
        }).focusout(function () {
            log('input focusout');
        }).focus(function () {
            log('input focus');
        }).blur(function () {
            log('input blur');
        });
    
    
    function log(str) {
        $('.log').append($('<div></div>').text(str));
    }
});
