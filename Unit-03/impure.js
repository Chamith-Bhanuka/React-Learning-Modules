function randomNumberAdd(a, b) {
    let time = Date.now();
    return a + b + time;
}

console.log(randomNumberAdd(5, 5));

for (let i = 0; i < 10; i++) {
    console.log(randomNumberAdd(5, 5));
}