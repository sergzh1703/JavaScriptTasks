/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
/*Задание 5:
    
Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

const randomNumber5 = Math.floor(Math.random() * 100);
switch (true) {
    case randomNumber5 < 20:
        console.log('randomNumber5 less 20 and =',randomNumber5)
        break;
    case randomNumber5 > 50:
        console.log('randomNumber5 large 50 and =',randomNumber5)
        break;
    default:
        console.log('randomNumber5 large 20 and less 50 and =',randomNumber5)
       }       