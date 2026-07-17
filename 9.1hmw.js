// Task 1
let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);
// Task 2
console.log(fruits[0], fruits[2]); // just note можно еще console.log(numbers.at(-1));
fruits.push("Груша");
console.log(fruits);
// Task 3
fruits.pop();
fruits.shift();
console.log(fruits);
// Task 4
fruits.forEach(fruit => console.log(fruit));
// Task 5
let lengths = fruits.map(fruit => console.log(fruit.length));
// Task 6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersEven = numbers.filter(number => number % 2 === 0);
console.log(numbersEven);
// Task 7
let sum = numbers.reduce((acc, number)  => acc + number, 0);
console.log(sum);
// Task 8
let GreaterThan5 = numbers.find(num => num > 5);
console.log(GreaterThan5)
// Task 9
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
newArr = arr1.concat(arr2);
console.log(newArr);
// Task 10
console.log(fruits.includes("Банан"));
// Task 11
console.log(fruits.reverse());
