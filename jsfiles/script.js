//nav button
const navBtn=document.querySelector('button.navbar-toggler');
const sideContainer=document.querySelector(".left_side_bar");

navBtn.addEventListener('click',()=>{
  sideContainer.classList.toggle('show');

})
