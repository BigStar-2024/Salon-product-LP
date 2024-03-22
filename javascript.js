// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     // loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     // scrollbar: {
//     //     el: '.swiper-scrollbar',
//     // },
// });

document.getElementById('sp_menu').addEventListener('click', function () {
    document.querySelector('.sp_line_btn2').style.setProperty('display', 'none', 'important');
    document.querySelector('.sp_first').style.setProperty('display', 'block', 'important');
    document.querySelector('.logo2').style.setProperty('display', 'none', 'important');
    document.querySelector('.sp_menu').style.setProperty('display', 'none', 'important');
});

document.getElementById('sp_close').addEventListener('click', function () {
    document.querySelector('.sp_line_btn2').style.setProperty('display', 'block', 'important');
    document.querySelector('.sp_first').style.setProperty('display', 'none', 'important');
    document.querySelector('.logo2').style.setProperty('display', 'block', 'important');
    document.querySelector('.sp_menu').style.setProperty('display', 'block', 'important');
    document.querySelector('.sp_menu').style.setProperty('top', '-36px', 'important');
    document.querySelector('.sp_menu').style.setProperty('left', '85%', 'important');
});


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true, // Enable loop mode to make the images flow continuously
  autoplay: {
    delay: 1000, // Set the delay between slides in milliseconds
    disableOnInteraction: false, // Enable autoplay even after user interactions
  },
  pagination: {
    el: ".swiper-pagination", // Add pagination bullets
    clickable: true, // Allow clicking on pagination bullets to navigate
  },
});