const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const obj1 = {
    first: 10,
    second: 20,
}

const obj2 = {
    third: 30,
    fourth: 40,
}

const obj3 = {
    ...obj1,
    ...obj2,
}

console.log(obj3);

// Pass arguments to function

function sum(a, b, c) {
    console.log(a + b + c);
}

const arr = [1,2,3];
const obj = {
    one: 10,
    two: 20,
    three: 30,
}

sum(...arr)
sum(...Object.values(obj))

const arrX = [1,2,3];
const arrY = [...arrX];

arrX[0] = 100
console.log(arrX)
console.log(arrY)

const objX = {one: 10, two: 20, three: 30};
const objY = {...objX};
objX['one'] = 5000;
console.log(objX)
console.log(objY)

// Rest Operator

const arr_1 = [1,2,3,4,90];

function sum_1(...args) {
    let sum = 0;

    for (const arg of args) {
        sum += arg;
    }

    console.log(sum)
}

sum_1(...arr_1)

arr_slice = [100, 200, 300, 400, 500]
const [firstSl, secSl, ...restSl] = arr_slice;
console.log('😏',firstSl)
console.log(secSl)
console.log(restSl)
