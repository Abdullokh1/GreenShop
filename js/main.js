// let menuBtn = document.querySelector('.header__menu')
// let Navbar = document.querySelector('.nav')
// let menuIcon = document.querySelector('.header__menu-icon')

// let count = 0
// menuBtn.addEventListener('click', () =>{
//   Navbar.classList.toggle('display')
  
//   if(count == 0){
//     menuIcon.className = 'bx bx-x'
//     count = 1
//   }
//   else{
//     menuIcon.className = 'bx bx-menu'
//     count = 0
//   }
// })

$(document).ready(function () {
  $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
  });
});

