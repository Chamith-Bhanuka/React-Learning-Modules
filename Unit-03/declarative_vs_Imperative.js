// Declarative

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even_numbers = numbers.filter(number => number % 2 === 0);

console.log(even_numbers);

// Imperative
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even_numbers2 = [];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        even_numbers2.push(numbers2[i]);
    }
}
console.log(even_numbers2);