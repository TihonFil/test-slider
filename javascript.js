
const sliderItems = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.dot');
const buttonPrev = document.getElementById('btn-prev');
const buttonNext = document.getElementById('btn-next');

let index = 0;

const activeSlide = function (n) {
  for (slide of sliderItems) {
    slide.classList.remove('slider__item--active');
  }
  sliderItems[n].classList.add('slider__item--active');
};

const activeDots = function (n) {
  for ( dot of sliderDots) {
    dot.classList.remove('dot--active');
  }
  sliderDots[n].classList.add('dot--active');
};

const prepareCurrentSlide = function (ind) {
  activeSlide(ind);
  activeDots(ind);
};

const nextSlide = function () {
  if (index == sliderItems.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = function () {
  if (index == 0) {
    index = sliderItems.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

sliderDots.forEach(function (item, indexDot) {
  item.addEventListener('click', function () {
    index = indexDot;
    prepareCurrentSlide(index);
  })
})
 

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);

