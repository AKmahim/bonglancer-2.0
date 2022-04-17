// ====== slider js ==========

$('.bo').slick({
    // dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    // centerMode: true,
    // variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,

  });




  // ============ preloader js code =======

// var preloader = document.getElementById("preloader");


// window.addEventListener("load",()=>{
// 	preloader.style.display = "none";
// })

// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 2800);
// }

// window.onload = fadeOut;



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
