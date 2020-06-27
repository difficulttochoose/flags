//дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет. Если есть - вывести 'есть', если нет - вывести 'нет'.
const array = ['r', 56, 25, 'y', 'y', 't', 'c', 's', 'y', 'r', 'd'];
let flag = false;
for (let i = 0; i < array.length; ++i) {
    if (array[i] === 'c') {
        flag = true;
        break;
    }
}
alert(flag ? 'There is a symbol \'c\' in the array' : 'There is no symbol \'c\' in the array');

//необходимо создать функцию hasElem, которая параметром будет принимать массив и возвращать true, если 'c' есть в массиве, и false - если нет
const array2 = ['r', 56, 25, 'y', 'y', 't', 'c', 's', 'y', 'r', 'd'];

/**
 *
 * @param {array} arr
 * @returns {boolean}
 */
function hasElem(arr) {
    let flag2 = false;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === 'c') {
            flag2 = true;
            break;
        }
    }
    return flag2;
}

hasElem(array2);

//Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let flag3 = false;
for (let i = 0; i < array3.length; ++i) {
    if (array3[i] === 5) {
        flag3 = true;
        break;
    }
}
alert(flag3 ? 'There is a number 5 in the array' : 'There is no number 5 in the array');

//Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
const number = prompt('Enter the number');
let flag4 = false;
for (let i = 2; i < number; ++i) {
    if (number % i === 0) {
        flag4 = true;
        break;
    }
}
alert(flag4 ? 'TRUE' : 'FALSE');

//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
const array5 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9];
let flag5 = false;
for (let i = 0; i < array5.length - 1; ++i) {
    if (array5[i] === array5[i + 1]) {
        flag5 = true;
        break;
    }
}
alert(flag5 ? 'Yes' : 'No');
