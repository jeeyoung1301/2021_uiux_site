$(window).scroll(function(){
    win_scr = $(window).scrollTop();
    if(win_scr<50){
        $('#main_header #headerWrap').css({background:'none'})
        $('#main_header .gnb > ul > li > a').css({color:'#fff'})
    }
    else{
        $('#main_header #headerWrap').css({background:'rgba(255,255,255,0.6)',transition:'0.3s',});
        $('#main_header .gnb > ul > li > a').css({color:'#333'});
        $('#main_header .lan a').css({color:'#333'});
    }
    
});

$(document).ready(function(){
    const visual_01 = $('.slider').bxSlider({
        controls:false,
        auto:true,
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
        innerWidth:'50%',
        innerHeight:'100%'
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