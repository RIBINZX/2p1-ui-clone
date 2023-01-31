// document.onreadystatechange = function () {
//   let lastScrollPosition = 0;
//   const navbar = document.querySelector('.navbar');
//   window.addEventListener('scroll', function (e) {
//     lastScrollPosition = window.scrollY;

//     if (lastScrollPosition > 100)
//       navbar.classList.add('navbar-dark');
//     else
//       navbar.classList.remove('navbar-dark');
//   });
// }



// $(document).ready(function () {
//   console.log("about to in");
//   var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 10,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
// });
// $(document).ready(function () {

//   $('#menu').click(function () {
//       $(this).toggleClass('fa-times');
//       $('.navbar').toggleClass('nav-toggle');
//   });

//   $(window).on('scroll load', function () {
//       $('#menu').removeClass('fa-times');
//       $('.navbar').removeClass('nav-toggle');

//       if (window.scrollY > 60) {
//           document.querySelector('#scroll-top').classList.add('active');
//       } else {
//           document.querySelector('#scroll-top').classList.remove('active');
//       }

//       // scroll spy
//       $('section').each(function () {
//           let height = $(this).height();
//           let offset = $(this).offset().top - 200;
//           let top = $(window).scrollTop();
//           let id = $(this).attr('id');

//           if (top > offset && top < offset + height) {
//               $('.navbar ul li a').removeClass('active');
//               $('.navbar').find([href="#${id}"]).addClass('active');
//           }
//       });
//   });

//   // smooth scrolling
//   $('a[href*="#"]').on('click', function (e) {
//       e.preventDefault();
//       $('html, body').animate({
//           scrollTop: $($(this).attr('href')).offset().top,
//       }, 500, 'linear')
//   });


// });



document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100)
      navbar.classList.add('navbar-dark');
    else
      navbar.classList.remove('navbar-dark');
  });
}



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
};

















document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100)
      navbar.classList.add('navbar-dark');
    else
      navbar.classList.remove('navbar-dark');
  });
  let last = 0;
  const myr = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function(f) {
    last = window.scrollY;
    
    if (last > 100)
      myr.classList.add('show');
    else
      myr.classList.remove('show');
  });
}

