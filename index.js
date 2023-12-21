
//PROBLEM 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

console.log(randomCar) // Output: 'Tesla'
console.log(otherRandomCar) // Output: 'Mercedes'

//PROBLEM 2
const employee1 = {
 name: 'Elon',
 age: 47,
 company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name); // Output: ReferenceError: name is not defined
console.log(otherName); // Output: 'Elon'


// PROBLEM 3
const employee2 = {
 name: 'Elon',
 age: 47,
 company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name); // Output: ReferenceError: name is not defined
console.log(otherName); // Output: 'Elon'

//PROBLEM 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

console.log(first == second); // Output: false (2 != 5)
console.log(first == third); // Output: true (2 == 2)


//PROBLEM 5
const lastTest = {
 key: 'value',
 secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key); // Output: 'value'
console.log(secondKey); // Output: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Output: 1
console.log(willThisWork); // Output: 5