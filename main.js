var slides = document.querySelectorAll('.slide');
var controls = document.querySelector('.controls');
var indicators = document.querySelectorAll('.indicator');
let indContainer = document.querySelector('.indicators');

var currentSlide = 0;
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowLRight';
const SPACE = ' ';
const PAUES = 'paues';
const PLAY = 'play';


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

function clickPausePlay() {
  if (playing) pauseSlideShow()
  else playSlideShow();
}

function clickPrev() {
  pauseSlideShow();
  previousSlide();

}

function clickNext() {
  pauseSlideShow();
  nextSlide();

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


function clickIndicatorBtn(e) {
    let target = e.target;

  if (target.classList.contains('indicator')) {
    pauseSlideShow();
    goToSlide(+target.getAttribute('data-slide-to'));
  }
}
indContainer.addEventListener('click', clickIndicatorBtn);




document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowLeft')
  clickPrev();
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowRight')
  clickNext();
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'Space')
  clickPausePlay();
});





