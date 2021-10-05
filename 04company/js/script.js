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

    // $('.toggleMenu').click();
    // $('.toggleMenu').on('이벤트명',리스너);
    // $('.toggleMenu').on('click',function(){});

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
        innerWidth:'64%',
        innerHeight:'64%'
    });



    $('.toggleMenu').click(function(){
        const toggleMenu = $('.toggleMenu').attr('class'); // value toggleMenu
        console.log(toggleMenu);
        if(toggleMenu == 'toggleMenu'){
          //  $('.toggleMenu').addClass('active'); //제이쿼리
          document.getElementsByClassName('toggleMenu')[0].classList.add('active'); //자바스크립트
          $('.gnb').addClass('view');
        }
        else{
            // $('.toggleMenu').removeClass('active');
            document.getElementsByClassName('toggleMenu')[0].classList.remove('active'); //자바스크립트
            $('.gnb').removeClass('view');
        }
    });

    $(window).resize(function(){
        $('.toggleMenu').removeClass('active');
        $('.gnb').removeClass('view');
    });

});
