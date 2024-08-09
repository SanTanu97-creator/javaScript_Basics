/*
let size = parseInt(prompt("Enter the size of array :"));
let marks = [];

for (let i = 0; i < size; i++) {
    marks.push(parseInt(prompt("Enter number :")));
}

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

console.log(marks);

for (let val of marks) {
    console.log(val);
}
2
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`Average of total marks : ${avg}`);


let marks = [67, 48, 83, 65, 97];
console.log(marks);

//used to add item at the and of the array
marks.push(56);
console.log(marks);

//used to delete item at the end of the array
marks.pop();
console.log(marks);


let heroes = ["ironman", "thor", "hulk"];

//used to concat to arrays 
let mix = marks.concat(heroes);
console.log(mix);

//used to add item at the 1st of the array
mix.unshift("nothing");

console.log(mix);


//used to delete 1st element of the array
mix.shift();
console.log(mix);

//used to slice the array
console.log(mix.slice(0, 5));

//used to change the original array 
mix.splice(5, 3, 100, 101, 102);
console.log(mix);
*/