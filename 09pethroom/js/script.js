const searchIcon = document.querySelector('.search_icon'),
      searchModal = document.querySelector('.search_modal'),
      searchClose = document.querySelector('.search_close');

searchIcon.addEventListener('click',function(){
    searchModal.style.display = 'block';
});

searchClose.addEventListener('click',function(){
    searchModal.style.display = 'none';
});

const sliderWrapper01 = document.querySelector('.visual_slide'),
      sliderContainer01 = document.querySelector('.slider01');
let  slides01 = document.querySelectorAll('.slider01 li'),
     slideCount01 = slides01.length,
     currentIndex01 = 0,
     topHeight01 = 0;
// function calTallestSlide(){
//     for(let i=0;i<slideCount01;i++){
//       if(slides01[i].offsetHeight > topHeight01){
//           topHeight01 = slides01[i].offsetHeight;
//       }
//     }

//     sliderWrapper01.style.height = `${topHeight01}px`;
//     sliderContainer01.style.height = `${topHeight01}px`;
// }
// calTallestSlide();

for(let i=0;i<slideCount01;i++){
    slides01[i].style.left = `${i * 100}%`; 
}