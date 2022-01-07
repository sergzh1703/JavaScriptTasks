/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
const my_sity = 'Minsk';
    my_country = 'Belarus';
    population = 1000000;
    football_stadion = true;
let my_info = `My city is ${my_sity}, my country is ${my_country}. Population=${population}. Fotball stadion ${football_stadion}`;
console.log(my_info)