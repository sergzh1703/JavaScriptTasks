/* 
    Задание 4:
    Напишите функцию, в теле которой будет находится следующий код:
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
    firstName и lastName - это параметры функции
    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/
console.log('task4');
const MyName = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

MyName('Sergey','Zhdanovich');