/* 
    Задание 5:
    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
   */
console.log('task5');
let OddNumber = [];
let n = 21;
while (n <= 67){
    if (n%2) {
        OddNumber.push(n);    
    }
n++;
}
console.log(OddNumber);