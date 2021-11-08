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
const close01 = modal01.querySelector('.close01');
const close02 = modal02.querySelector('.close02');
const close03 = modal03.querySelector('.close03');

more01.addEventListener('click',function(e){
    modal01.style.display = 'flex';
});
close01.addEventListener('click',function(e){
    modal01.style.display = 'none'
});
modal01.addEventListener('click',function(e){
    modal01.style.display = 'none'
});

more02.addEventListener('click',function(e){
    modal02.style.display = 'flex';
});
close02.addEventListener('click',function(e){
    modal02.style.display = 'none'
});
modal02.addEventListener('click',function(e){
    modal02.style.display = 'none'
});

more03.addEventListener('click',function(e){
    modal03.style.display = 'flex';
});
close03.addEventListener('click',function(e){
    modal03.style.display = 'none'
});
modal03.addEventListener('click',function(e){
    modal03.style.display = 'none'
});