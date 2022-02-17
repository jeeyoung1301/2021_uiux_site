const searchIcon = document.querySelector('.search_icon');
const searchModal = document.querySelector('.search_modal')
const searchClose = document.querySelector('.search_close')

searchModal.addEventListener('click',function(e){
    if(e.target.classList.contains('searchModal')){
        searchModal.style.display = 'none';
    }
});

searchIcon.addEventListener('click',function(){
    searchModal.style.display = 'block';
});

searchClose.addEventListener('click',function(){
    searchModal.style.display = 'none';
})