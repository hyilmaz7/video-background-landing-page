/* Slide */
const slideContent = document.querySelector('.image-slider');
const previous = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');

let counter = 0;

previous.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide(){
    if(counter === 0){
        counter = 4;
    }
    counter--;
    slideContent.style.background = `url(img/bcg-${counter}.jpg)center center/cover`;
}

function nextSlide(){
    if(counter === 3){
        counter = -1;
    }
    counter++;
    slideContent.style.background = `url(img/bcg-${counter}.jpg)center center/cover`;
}


/* Counter */
const counters = document.querySelectorAll('.counter');
const speed = 1000;

const increment = counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }
        else{
            count.innerText =target;
        }

    }

   updateCount();




});
