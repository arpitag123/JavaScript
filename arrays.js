let numbers = [1,2,3,4,5]

console.log(numbers);

let fruits = ['apple', 'mango', 'banana'];
console.log(fruits);

let cars = new Array('bmw', 'swift', 'mercdes');
console.log(cars);
console.log(cars[1]);
cars[1] = 'honda';
console.log(cars[1]);
console.log(cars);
    
cars.push('ford');
console.log(cars);
console.log(cars.length);

let x;
for(x in fruits){
    console.log(fruits[x]);
}

for (x of fruits){
    console.log(x);
}

//array methods

let fruits1 = ['apple', 'mangoe', 'grapes'];
console.log(fruits1);

fruits1.pop(); //removes last element
console.log(fruits1);

fruits1.shift(); //removes first element
console.log(fruits1);

fruits1.push('cherry'); // adds element in last
console.log(fruits1)

fruits1.unshift('lemon'); // adds element in first
console.log(fruits1)

delete fruits1[1];

fruits1[1] = 'orange';
fruits1[3] = 'mango';
fruits1[4] = 'papaya';
console.log(fruits1);

fruits1.splice(0,2); //removes elements from 0 -2
console.log(fruits1)    

fruits1.splice(2,0, 'lemon', 'orange')
console.log(fruits1);

let citrusfruits = fruits1.slice(2,4);
console.log(fruits1);
console.log(citrusfruits);


let evenum = [2,4,6];
let oddnum = [1,3,5];
let primnum = [1,2,3];

let number = evenum.concat(oddnum, primnum);
console.log(number);