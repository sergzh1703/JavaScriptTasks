/* 
    Задание 1:

    Доделать слайдер с урока

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll(".slide"),      
      dots = document.querySelectorAll('.dot');
      
let index = 0;

const activeSlide = n => {
    for(slide of slides) {  
        //console.log(slide)      
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {  
        //console.log(dot)      
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = (ind)=> {
      activeSlide(ind);
      activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    } else {
    index++;
    prepareCurrentSlide(index);

    }
}

const prevSlide = () =>{
    if(index == 0){
        index = slides.length -1;
        prepareCurrentSlide(index);
    } else {
    index--;
    prepareCurrentSlide(index);    
    }   
}

//для работы кнопок
dots.forEach((item, indexDot)=>{
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})


const myInterval = setInterval(nextSlide, 2000)
//const stopAuto = clearInterval(myInterval)
//stopAuto.addEventListener('click',nextSlide)


next.addEventListener('click',nextSlide);
prev.addEventListener('click', prevSlide);

//setInterval(nextSlide, 2000)




