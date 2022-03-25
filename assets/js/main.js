// ====== slider js ==========

$('.slider-item').slick({
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

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;