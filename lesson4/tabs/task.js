/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/


const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content')


const tabs3 = document.getElementById('tabs3');
const contentTab3 = document.querySelectorAll('.contentTab3')
console.log(contentTab3)


const changeClass = el => {
    for(let i=0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');

}
//добавляем активную кнопку для 3.1
const changeClassTab3 = el => {
    console.log(el)
    for(let i=0; i < tabs3.children.length; i++){
        tabs3.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

//еделаем активную кнопку (1,2,3)
tabs.addEventListener('click', e => {
    const curenTab = e.target.dataset.btn; 
    const curenTab3 = e.target.dataset.btn3; 
    changeClass(e.target);
    for(let i=0; i<content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === curenTab){
            content[i].classList.add('active');
        }
    }
})

//еделаем активную кнопку (3.1, 3.2)
tabs3.addEventListener('click', e => {
    const curenTab3 = e.target.dataset.btn3;
    changeClassTab3(e.target);
     for(let i=0; i<contentTab3.length; i++){
         contentTab3[i].classList.remove('active');
         if(contentTab3[i].dataset.content3 === curenTab3){
             console.log(curenTab3)
             contentTab3[i].classList.add('active');
         }
     }
 })



