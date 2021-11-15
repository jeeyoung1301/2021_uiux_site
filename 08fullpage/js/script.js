$(function(){
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally:true,
        navigation:true,
        anchors:['section1','section2','section3','section4','section5'],
        sectionsColor:['#ccc','#FFF9E9','#FACAC6','#F1F1F1','#104138'],
        navigationTooltips:['Hello!','innisfree X Knotted','노세범 파우더 쿠션','관심제품&리뷰','Info']
    });
});

const review01 = document.querySelector('.review01');
const modal01 = document.querySelector('.modal01');
const close01 = document.querySelector('.close01');

modal01.addEventListener('click',function(e){
    if(e.target.classList.contains('modal01')){
        modal01.style.display = "none"
    }
});

review01.addEventListener('click',function(){
    modal01.style.display = 'block'
});
close01.addEventListener('click',function(){
    modal01.style.display = 'none'
});

const review02 = document.querySelector('.review02');
const modal02 = document.querySelector('.modal02');
const close02 = document.querySelector('.close02');

review02.addEventListener('click',function(){
    modal02.style.display = 'block'
});
close02.addEventListener('click',function(){
    modal02.style.display = 'none'
});
modal02.addEventListener('click',function(e){
    if(e.target.classList.contains('modal02')){
        modal02.style.display = "none"
    }
});

const review03 = document.querySelector('.review03');
const modal03 = document.querySelector('.modal03');
const close03 = document.querySelector('.close03');

review03.addEventListener('click',function(){
    modal03.style.display = 'block'
});
close03.addEventListener('click',function(){
    modal03.style.display = 'none'
});
modal03.addEventListener('click',function(e){
    if(e.target.classList.contains('modal03')){
        modal03.style.display = "none"
    }
});

const review04 = document.querySelector('.review04');
const modal04 = document.querySelector('.modal04');
const close04 = document.querySelector('.close04');

review04.addEventListener('click',function(){
    modal04.style.display = 'block'
});
close04.addEventListener('click',function(){
    modal04.style.display = 'none'
});
modal04.addEventListener('click',function(e){
    if(e.target.classList.contains('modal04')){
        modal04.style.display = "none"
    }
});


