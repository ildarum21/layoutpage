jQuery(document).ready(function ($) {
    $('.single-item').slick({
        slidesToShow: 1,  // по одному слайдеру 
        slidesToScroll: 1, // по одному менять
        arrows: false,
        centerMode:true,
        swipe: false,
        dots:false,
        asNavFor: '.smallnav',
    });
    $('.smallnav').slick({ // настройка навигации
        arrows:false,
        slidesToShow: 5, // указываем что нужно показывать 3 навигационных изображения
        asNavFor: '.single-item', // указываем что это навигация для блока выше
        focusOnSelect: true,// указываем чтобы слайделось по клику
    });
    $('.play__icon_openmodal').click(function(){
        let modalName = $(this).attr('data-modal')
        console.log(modalName);
        let modal =$(`.modal_open[data-modal="${modalName}"]`)
        modal.addClass('modal_isOpen');
        if(modalName=='video'){
            modal.append($('<div class="iframe-wrapper"><iframe id="video" width="100%" height="100%" src="https://www.youtube.com/embed/KvUgaHTNit4" frameborder="0"allow-downloads allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe><div>'))
        }
        $('.modal_overlay').addClass('modal_isOpen');
    })
    $('.modal__close_close').click(function(){
        $(this).parent('.video-modal').removeClass('modal_isOpen');
        $('.modal_overlay').removeClass('modal_isOpen');
        $('.iframe-wrapper').detach();
    })
    $('.modal_overlay').click(function(){
        $('.video-modal.modal_isOpen').removeClass('modal_isOpen')
        $(this).removeClass('modal_isOpen');
        $('.iframe-wrapper').detach();
    })
});