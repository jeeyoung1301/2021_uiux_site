$(function(){
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally:true,
        navigation:true,
        anchors:['section1','section2','section3','section4','section5'],
        sectionsColor:['#ccc','#bbb','#CB4745','skyblue','ivory'],
    });
});

const modal01 = document.querySelector('#modal01');
const modal02 = document.querySelector('#modal02');
const modal03 = document.querySelector('#modal03');
const more01 = document.querySelector('.iconMore01');
const more02 = document.querySelector('.iconMore02');
const more03 = document.querySelector('.iconMore03');

more01.addEventListener('click',function(e){
    modal01.style.display = 'flex';
});
more02.addEventListener('click',function(e){
    modal02.style.display = 'flex';
});
more03.addEventListener('click',function(e){
    modal03.style.display = 'flex';
});
