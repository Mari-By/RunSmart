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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog__link').each(function(i) {
        $(this).on('click', function(e) {
           e.preventDefault();
           $('.catalog__main-content').eq(i).toggleClass('.catalog__main-content_active');
           $('.catalog__list-content').eq(i).toggleClass('.catalog__list-content_active');
        })
      })

      $('.catalog__link-list').each(function(i) {
        $(this).on('click', function(e) {
           e.preventDefault();
           $('.catalog__main-content').eq(i).toggleClass('.catalog__main-content_active');
           $('.catalog__list-content').eq(i).toggleClass('.catalog__list-content_active');
        })
      })

});