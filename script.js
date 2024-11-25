const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

var elemC = document.querySelector('#elem-container');
var fixed = document.querySelector('#fixed-image');
elemC.addEventListener('mouseenter', () => {
  fixed.style.display = 'block';
});
elemC.addEventListener('mouseleave', () => {
  fixed.style.display = 'none';
});

// var elem1 = document.querySelector('#elem1');
// elem1.addEventListener('mouseenter', () => {
//   var image = elem1.getAttribute('data-image');
//   fixed.style.backgroundImage = `url(${image})`;  -->  template literals
// });

var elems = document.querySelectorAll('.elem');
elems.forEach(function (e) {
  e.addEventListener('mouseenter', () => {
    var image = e.getAttribute('data-image');
    fixed.style.backgroundImage = `url(${image})`;
  });
});

function swiperAnimation() {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 100,
  });
}
swiperAnimation();
