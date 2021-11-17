$(document).ready(function(){
    const visual_01 = $('.slider').bxSlider({
        controls:false,
    });
    $('.nextBtn').click(function(){
        visual_01.goToNextSlide();
    });
    $('.prevBtn').click(function(){
        visual_01.goToPrevSlide();
    });

    $('.slider_01').bxSlider({
        controls:false,
    })

    $('.slider_02').bxSlider({
        controls:false,
    });
    $('.slider_03').bxSlider({
        controls:false
    })
    $('.slider_04').bxSlider({
        controls:false
    });
    $('.slider_04 > li a').colorbox({
        iframe:true,
        innerWidth:960,
        innerHeight:540
    });



    $('.toggleMenu').click(function(){
        const toggleMenu = $('.toggleMenu').attr('class');
        console.log(toggleMenu);
        if(toggleMenu == 'toggleMenu'){
          document.getElementsByClassName('toggleMenu')[0].classList.add('active'); 
          $('.gnb').addClass('view');
        }
        else{
            document.getElementsByClassName('toggleMenu')[0].classList.remove('active');
            $('.gnb').removeClass('view');
        }
    });

    $(window).resize(function(){
        $('.toggleMenu').removeClass('active');
        $('.gnb').removeClass('view');
    });

});
