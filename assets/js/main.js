let carousel = null;
let indicator = null;
let slidesCount = null;

function createContainer() {
   let container = document.createElement('div');
    container.setAttribute('class', 'carousel');
    container.setAttribute('id', 'carousel');
    document.querySelector('body').prepend(container);
    carousel = document.querySelector('#carousel');
}

function createSlides(n) {
    let slides = document.createElement('ul');
    slides.setAttribute('class', 'slides');
    for (let i = 0; n > i; i++) {
        let slideItem = document.createElement('li');
        let slideLink = document.createElement('a');
        slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
        slideLink.setAttribute('href', '#');
        slideItem.appendChild(slideLink);
        slides.appendChild(slideItem);
    }
    carousel.appendChild(slides);
}

function createIndicators(n) {
    let indicators = document.createElement('div');
    indicators.setAttribute('class', 'indicators');
    for (let i = 0; n > i; i++) {
        let indicatorsItem = document.createElement('span');
        indicatorsItem.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
        // indicatorsItem.setAttribute('data-slide-to', `${i}`);
        indicatorsItem.dataset.slideTo = `${i}`;
        indicators.appendChild(indicatorsItem);
    }
    carousel.appendChild(indicators);
}

function createControls() {
    let controls = document.createElement('div');
    controls.setAttribute('class', 'controls');

    for (let i = 0; 3 > i; i++) {
        let controlsItem = document.createElement('div');
        let controlsIcon = document.createElement('i');
        // controlsItem.setAttribute('class', 'controls__item');
        // controlsIcon.setAttribute('class', 'fas');
        i === 0 ? controlsItem.setAttribute('class', 'controls__item controls__prev') || controlsIcon.setAttribute('class', 'fas fa-chevron-left') :
            i === 1 ? controlsItem.setAttribute('class', 'controls__item controls__next') || controlsIcon.setAttribute('class', 'fas fa-chevron-right') :
                controlsItem.setAttribute('class', 'controls__item controls__pause') || controlsIcon.setAttribute('class', 'fas fa-play');
        controlsItem.appendChild(controlsIcon);
        controls.appendChild(controlsItem);
    }
    carousel.appendChild(controls);
}

function createStyle() {
    let styleCss = document.createElement('style');
    styleCss.innerHTML = `
 .slides,
 .controls {
      position: relative;
    }
 .indicators {
      display: flex;
    }
 .controls__item,
 .indicators__item {
      display: block;
      width: 20px;
      height: 20px;
      background-color: black;
      margin: 5px;
      border-radius: 3px;
    }`;
    carousel.appendChild(styleCss);
}

function indicate(e) {
    let target = e.target;
    if (target.classList.contains('indicators__item')) {
        target.style.backgroundColor = 'red';
        if (indicator !== null) indicator.removeAttribute('style');
        indicator = target;
        // target.classList.contains('indicators__item') ? target.style.backgroundColor = 'red' :
        // indicator !== null ? indicator.removeAttribute('style') : indicator = target;
    }
}

function listener() {
   let indicators = document.querySelector('.indicators');
    indicators.addEventListener('click', indicate);
}

function createCarousel(slidesCount = 5) {
    carousel = document.querySelector('#carousel');
    // createContainer();
    createSlides(slidesCount);
    createIndicators(slidesCount);
    createControls();
    createStyle();
    // indicate();
    listener();

    return slidesCount;
    console.log(slidesCount);
}

createCarousel();





