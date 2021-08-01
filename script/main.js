$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2800,
    });
    $('.slider-sea').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1.7,
        slidesToScroll: 1, 
        autoplay: false,
        arrows: true,
    });
});