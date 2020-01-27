// var burger = document.getElementById("burger");
// var menu = document.getElementById("menu");
// var bg = document.getElementById("bg");

// burger.addEventListener("click", function() {
//   var isCross = this.classList.contains("cross");

//   if (isCross) {
//     this.classList.remove("cross");
//     menu.classList.remove("visible");
//     bg.classList.remove("visible");
//   } else {
//     this.classList.add("cross");
//     menu.classList.add("visible");
//     bg.classList.add("visible");
//   }
// });

$(".customer-review").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
