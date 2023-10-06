//nav button
const navBtn=document.querySelector('button.navbar-toggler');
const sideContainer=document.querySelector(".sidebar__container");
navBtn.addEventListener('click',()=>{
  sideContainer.classList.toggle('show');
})