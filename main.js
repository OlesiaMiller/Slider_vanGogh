var slides = document.querySelectorAll('.slide');
var controls = document.querySelector('.controls');
var indicators = document.querySelectorAll('.indicator');

var currentSlide = 0;


  controls.style.display = 'inline-block';


function previousSlide() {
  goToSlide(currentSlide - 1);
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function goToSlide(n) {
  slides[currentSlide].classList.toggle('active');
  indicators[currentSlide].classList.toggle('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.toggle('active');
  indicators[currentSlide].classList.toggle('active');
}

var slidInteral = setInterval(nextSlide, 2000);

var playing = true;
var pauseButton = document.querySelector('#pause');


function playSlideShow() {
  pauseButton.className = 'far fa-pause-circle';
  playing = !playing;
  slidInteral = setInterval(nextSlide, 2000);
}

function pauseSlideShow() {
  pauseButton.className = 'far fa-play-circle';
  playing = !playing;
  clearInterval(slidInteral);
}

pauseButton.onclick = function() {
  if (playing) pauseSlideShow()
    else playSlideShow();
}

var previous = document.querySelector('#previous');
var next = document.querySelector('#next');

next.onclick = function() {
  pauseSlideShow();
  nextSlide();
}

previous.onclick = function() {
  pauseSlideShow();
  previousSlide();
}

// нужно сделать делигирование

function clickIndicatorBtn() {
  pauseSlideShow();
  goToSlide(+this.getAttribute('data-slide-to'));
}



for (var i = 0, n = indicators.length; i < n; i++) {
  indicators[i].addEventListener('click', clickIndicatorBtn);
}




