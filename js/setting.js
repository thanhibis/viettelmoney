//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-nav").fadeToggle();
});


$('.open-search').on('click', function(){
    $("html").toggleClass("js-locked");
    $("#popup-search").addClass("active");
});
$('.js-close').on('click', function(){
    $("html").removeClass("js-locked");
    $(".popup").removeClass("active");
});


$('.client-block__ct-item .form-control').change(function(){
    var check = $(this).val();
    if(check === '') {
        $(this).removeClass('focus');
    } else {
        $(this).addClass('focus');
       
    }
});

$('.client-block__otp-code .form-control').change(function(){
    var check = $(this).val();
    if(check === '') {
        $(this).removeClass('focus');
    } else {
        $(this).addClass('focus');
    }
});
setTimeout(function () {
    var checkload = $('.client-block__otp-code .form-control').val();
    if(checkload === '') {
        $('.client-block__otp-code .form-control').removeClass('focus');
    } else {
        $('.client-block__otp-code .form-control').addClass('focus');
    }
},700);



//show demo
$('.js-popup-error').on('click', function(){
    $("html").toggleClass("js-locked");
    $("#popup-error").addClass("active");
});

$('.js-popup-otp').on('click', function(){
    $("html").toggleClass("js-locked");
    $("#popup-otp").addClass("active");
});
$('.js-check-code').on('click', function(){
    var checkload = $('.client-block__otp-code .form-control').val();
    if(checkload === '') {
        $('.client-block__otp-code .form-control').removeClass('focus');
    } else {
        $('.client-block__otp-code .form-control').addClass('focus');
    }
});
