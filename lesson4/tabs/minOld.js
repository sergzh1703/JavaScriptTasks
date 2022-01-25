
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content')

console.log(tabs.children) //получим псевдомассив
const changeClass = el => {
    console.log(el)
    for(let i=0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
     }
     el.classList.add('active');

}



//еделаем активную кнопку
tabs.addEventListener('click', e => {
   // e это глобальный объект¸ обозначает событие (event), e.target показывает елемент на который указывает мышь
    const curenTab = e.target.dataset.btn;
    // btn атрибут добавляется в HTML (data-btn)
    changeClass(e.target);
    //changeClass(curenTab);
    for(let i=0; i<content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === curenTab){
            content[i].classList.add('active');
        }
    }
})
