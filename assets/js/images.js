let modal = document.querySelector('.modal');
let imgs = document.querySelectorAll('.myImg');
let modalImg = document.querySelector('.img');
let close = document.querySelector('.close');
let modal_content = document.querySelector('.modal-content');

imgs.forEach((img) => {
  img.addEventListener('click', function() {
    modal.style.display  = 'block';
    modal_content.src = img.src;
  });
  
})

close.addEventListener('click' , function() {
  modal.style.display = 'none';
});