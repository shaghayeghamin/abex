

const slides = document.querySelectorAll(".slides");

let currentSlide = 0;

let sliderInterval;


function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("slide-active");
    });

    slides[index].classList.add("slide-active");

}

export function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


export function previousSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length-1;

    }

    showSlide(currentSlide);

}


export function startSlider(){

    showSlide(currentSlide);

    sliderInterval = setInterval(()=>{

        nextSlide();

    },4000);

}


export function stopSlider(){

    clearInterval(sliderInterval);

}

startSlider();
console.log(slides);