





$(document).ready(function () {
    var stopAutohide;

    function showWindow() {
        $('.pop-up-main').show();

        $('html body').css('overflow', 'auto');
        stopAutohide = setTimeout(hideWindow, 6000);
    }
    // showWindow()
    function hideWindow() {
        $('.pop-up-main').hide();

        $('html body').css('overflow', 'auto');
    }
    // hideWindow()
    showWindow();

    $('.close-pop-up').click(function () {
        hideWindow();
        clearTimeout(stopAutohide);
    })
})



// fixed navigation

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';

        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

