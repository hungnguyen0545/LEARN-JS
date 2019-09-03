console.log("bla bla ....");
const name = "Hung";
const age = 18;
console.log(`My name is ${name} and I'm ${age} years old`);
//String
const s = 'hello world';
console.log(s.length);
console.log(s.substring(0, 5).toUpperCase());
let s1 = 'tech, me, it, you, something';
console.log(s1.split(','));

//Array - variables that hold multiple values
// Arrrays in JS can hold different types of data like 
// String,number... in the array
const arr = ['I', 'have', 'nothing', 'to', 'say', 6];
arr.push('hahaha'); //add tail
arr.unshift('blabla'); //add head
arr.pop(); //delete the end of var in array
console.log(Array.isArray(arr)); //check to see if ST is arr
console.log(arr.indexOf('nothing')); // return index of this var in arr
console.log(arr);

// Object literals
const myinfo = {
    fisrtname: 'Nguyen Sy',
    lastname: 'Canh Hung',
    age: 30,
    hobbies: ['read books', 'eat', 'watch Kshow'],
    address: {
        street: 'Nguyen Huu Canh',
        city: 'Dong Nai',
        state: 'VN '
    }
}
myinfo.email = 'vknfdoiad@gmail.com'; // add object
console.log(myinfo);
console.log(myinfo.age);

// if u want to pull ST in Myinfo out, u can do this
const { fisrtname, lastname, address: { city } } = myinfo;
console.log(lastname);
//
const todos = [{
        id: 1,
        text: 'take a trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meet old friend',
        isCompleted: true
    },
    {
        id: 3,
        text: 'give a present',
        isCompleted: false
    }
];
console.log(todos);

// 
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// while
let i = 0;
while (i < 10) {
    console.log(`number is ${i}`);
    i++;
}
for (let i = 0; i < 10; i++) {
    console.log(`number is ${i}`);
}

/*foreach : like for(...)
map : to create new array from the before array
filter : to create new array with a condition
*/
/*todos.forEach(function(todos) {
    console.log(todos.text);
}) */


const todoText = todos.map(function(todos) {
    return todos.text;
})
console.log(todoText);

const todoText_true = todos.filter(function(todos) {
    return todos.isCompleted == false;
});
console.log(todoText_true);

// mixed map and filter
const mix_filter_map = todos.filter(function(todos) {
    return todos.isCompleted == true;
}).map(function(todos) {
    return todos.text;
})

const mix_map_filter = todos.map(function(todos) {
    return todos.isCompleted;
}).filter(function(todos) {
    return todos.isCompleted == true;
})
console.log(`mix filter with map : ${mix_filter_map}`);

console.log(`mix map and filter : ${mix_map_filter}`);
/* equals
douple equals : to compare the value of var
tripple : also compare value and match the types*/

const x = '10';
if (x === 10) {
    console.log('X is 10')
} else {
    console.log('X is not 10')
}
// syntax : const/let/var x = condition ?(then/if condition i true) answer1 :(else) answer2
const number = 15;

const b = number > 10 ? 'red' : 'green';
//console.log(b);

switch (b) {
    case 'red':
        console.log('it is true');
        break;
    case 'green':
        console.log('it is false');
        break;
    default:
        console.log('Nothing')
        break;
}
// function
//create a function
function addnums(num1, num2) {
    console.log(num1 + num2);
}
// call the function
addnums(5, 2);
// or u can do another way
function addnums1(num1, num2) {
    return num1 + num2;
}
console.log(addnums1(5, 3));
// or
const addnums2 = (num1, num2) => console.log(num1 + num2);
console.log(addnums2(5, 4));

//Object oriented
//Construction function
function person(fisrtname, lastname, job, dob) {
    this.fisrtname = fisrtname;
    this.lastname = lastname;
    this.job = job;
    this.dob = new Date(dob);
}

person.prototype.getYearDate = function() {
    return this.dob.getFullYear();
}
person.prototype.getfullname = function() {
        return `${this.fisrtname} ${this.lastname}`;
    }
    // Class
class Man {
    constructor(fisrtname, lastname, job, dob) {
        this.fisrtname = fisrtname;
        this.lastname = lastname;
        this.job = job;
        this.dob = new Date(dob);
    }

    getFullYear() {
        return this.dob.getFullYear();
    }
    getfullname() {
        return `${this.fisrtname} ${this.lastname}`;
    }
}
// Instantiate objiect like object literals
//except it also has actual name of object like :person
const person1 = new person('hung', 'nguyen', 'student', '6-15-1999');
const man1 = new Man('canh hung', 'nguyen sy', 'It Manager', '8-21-1999');
console.log(person1);
console.log(person1.dob.getDate());
console.log(person1.getYearDate());
console.log(person1.getfullname());

console.log(man1);


//DOM

// single element selector
console.log(document.getElementById('register-form'));
console.log(document.querySelector('.username')); // often use in Jquery 
// muitiple element selector
console.log(document.querySelectorAll('li'));
//or
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
const item1 = document.querySelector('.list-item');
item1.children[1].innerHTML = 'hung';
item1.firstElementChild.textContent = ' Nt'
item1.lastElementChild.remove();

const btn = document.querySelector('#submit');

btn.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.querySelector('#register-form').style.background = "#ccc";

})