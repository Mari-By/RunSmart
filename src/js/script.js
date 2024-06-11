$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
       /*  adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/icon_chevron-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/icon_chevron-right.png"></button>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
                
        }
        }
        ]
    })
});