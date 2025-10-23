// Callback hell

// function fun1(callback) {
//     setTimeout(()=>{
//         console.log("Function 1");
//         callback();
//     }, 1000)
// }
//
// function fun2(callback) {
//     setTimeout(()=>{
//         console.log("Function 2");
//         callback();
//     }, 1000)
// }
//
// function fun3(callback) {
//     setTimeout(()=>{
//         console.log("Function 3");
//         callback();
//     }, 1000)
// }
//
// function fun4(callback) {
//     setTimeout(()=>{
//         console.log("Function 4");
//         callback();
//     }, 1000)
// }
//
// function fun5(callback) {
//     setTimeout(()=>{
//         console.log("Function 5");
//         callback();
//     }, 1000)
// }
//
// fun1(() => {
//     fun2(() => {
//         fun3(() => {
//             fun4(() => {
//                 fun5(() => {
//                     console.log("All functions completed!");
//                 });
//             });
//         });
//     });
// });


// Promises

function takeShower() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const shower = true

            if (shower) {
                console.log("You take shower!");
                resolve("You got shower");
            }else {
                reject("You don't shower properly...!")
            }

        },2000)
    })
}

function doHomework() {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{

            const homework = true;

            if (homework) {
                console.log("Do homework");
                resolve("You completed your homework!");
            } else {
                reject("You don't have complete homework...");
            }

        }, 1000)
    })
}

function play() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const play = true

            if (play) {
                console.log("Play you want to play!");
                resolve("You got to play!");
            } else {
                reject("You don't have permission to play!");
            }

        }, 3000)
    })
}

takeShower()
    .then((result) => {
        console.log(result);
        return doHomework();
    })
    .then((result) => {
        console.log(result);
        return play();
    })
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
})
