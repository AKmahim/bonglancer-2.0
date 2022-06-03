
// =========== swiper card =========

// =========== swiper card =========

var swiper = new Swiper(".services-slider", {
  // spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  
});






  // ============ preloader js code =======

// var preloader = document.getElementById("preloader");


// window.addEventListener("load",()=>{
// 	preloader.style.display = "none";
// })

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2800);
}

window.onload = fadeOut;



// ========== nav bar ========

function Navbar() {
  var x = document.getElementById("nav");
  if (x.style.top === "-150%") {
    x.style.top = "0%";
  } else {
    x.style.top = "-150%";
  }
}

// function Navbar() {
//   var element = document.getElementById("nav");
//   element.classList.toggle("show-nav");
// }
