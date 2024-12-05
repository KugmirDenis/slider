const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slide-img');
const controlsPoint = document.getElementById('point-control'); 
const linkCompleted = document.querySelectorAll('.completed__link')
const descriptionContainer = document.querySelectorAll('.description__container')

let currentSlideIndex = 0;
const paginationCircle = [];


function createPaginationCircle() {
const div = document.createElement('div');
div.className = 'point';
controlsPoint.appendChild(div);
paginationCircle.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircle[0].classList.add('point-active');
    paginationCircle.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveLinkClass() {
    if (linkCompleted.length > 0) {
        linkCompleted[0].classList.add('activeLink')
    } else {
        console.log('No elements found');
    }
    linkCompleted.forEach((link, index) => {
        link.addEventListener('click', () => changeSlide(index))
    })
}

function addActiveDescription() {
    if (descriptionContainer.length > 0) {
        descriptionContainer[0].classList.add('descriptionActive')
    } else {
        console.log('No elements found');
    }
}

function addDescription() {
    descriptionContainer[currentSlideIndex].classList.add('descriptionActive')
}

function removeDescription() {
    descriptionContainer[currentSlideIndex].classList.remove('descriptionActive')
}

function addActiveLink() {
    linkCompleted[currentSlideIndex].classList.add('activeLink')
}

function removeActiveLink() {
    linkCompleted[currentSlideIndex].classList.remove('activeLink')
}

function addActiveClass() {
    paginationCircle[currentSlideIndex].classList.add('point-active')
}

function removeActiveClass() {
    paginationCircle[currentSlideIndex].classList.remove('point-active')
}

function showSlide() {
    slides[currentSlideIndex].classList.add('active')
}

function hideSlide () {
    slides[currentSlideIndex].classList.remove('active')
}

function changeSlide(slideIndex) {
    hideSlide ();
    removeActiveClass();
    removeActiveLink();
    removeDescription();
    currentSlideIndex = slideIndex;
    addDescription();
    addActiveLink();
    addActiveClass();
    showSlide();
}

function nextSlide() {
let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length -1) {
        newSlideIndex = 0;
    }
changeSlide(newSlideIndex);
}

function backSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slides.length -1;
    }
    changeSlide(newSlideIndex);
}


console.log(descriptionContainer.length)
addActiveDescription()
addActiveLinkClass();
addPagination();
arrowLeft.addEventListener('click', backSlide);
arrowRight.addEventListener('click', nextSlide);

