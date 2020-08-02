
const slideShow =document.querySelector('#slide-show');
const slideImages =document.querySelectorAll('#slide-show img');

const prevBtn =document.querySelector('#preview');
const nextBtn =document.querySelector('#next');

let counter =1;
const size =slideImages[0].clientWidth;
// it helps to goto next image
// slideShow.style.transform ='translateX(' + (-size * counter )+'px)';
//button
nextBtn.addEventListener('click',() => {
    if (counter >= slideImages.length -1) return;
    slideShow.style.transition= "transform 0.5s ease-in-out";
    counter++;
    slideShow.style.transform ='translateX(' + (-size * counter )+'px)';

});

prevBtn.addEventListener('click',() => {
    if (counter <= 0) return;
    slideShow.style.transition= "transform 0.5s ease-in-out";
    counter--;
    slideShow.style.transform ='translateX(' + (-size * counter )+'px)';

});

