// alert('Hello JS');

// Коментар
/* Комментар
на багато рядків */

const message = 'Hello JS';
// let message = 'Hello JS';
// var message = 'Hello JS'; // Не бажано використовувати
alert(message);

const userName = prompt('Enter your name');
alert('Hello ' + userName);

const userAge = Number (prompt('Enter your age'));
const nextAge = add(userAge, 1); //userAge + 1
alert('Next year you will be ' + nextAge)

//Boolen: true, false

if (userAge >= 18) { // > < <= !== === != == || &&
    alert('You are adult');
} else if (userAge < 3) {
    alert('You are child');
} else {
    alert('You are underaged');
}


function add(a,b) {
    const sum = a + b;
    return sum;
}

